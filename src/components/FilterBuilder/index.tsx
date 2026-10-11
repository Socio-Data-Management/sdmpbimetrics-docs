import React, {useMemo, useState} from 'react';
import styles from './styles.module.css';

/* ---------- Pure builders (same payloads as documented on the Button Mode page) ---------- */

export interface FilterTarget {
  table: string;
  column: string;
}

export type ConditionOperator =
  | 'Is' | 'IsNot' | 'Contains' | 'DoesNotContain' | 'StartsWith' | 'DoesNotStartWith'
  | 'LessThan' | 'LessThanOrEqual' | 'GreaterThan' | 'GreaterThanOrEqual'
  | 'IsBlank' | 'IsNotBlank' | 'IsEmptyString' | 'IsNotEmptyString';

export interface Condition {
  operator: ConditionOperator;
  value?: string | number;
}

const NO_VALUE_OPERATORS: ConditionOperator[] = ['IsBlank', 'IsNotBlank', 'IsEmptyString', 'IsNotEmptyString'];

const OPERATORS: ConditionOperator[] = [
  'Is', 'IsNot', 'Contains', 'DoesNotContain', 'StartsWith', 'DoesNotStartWith',
  'LessThan', 'LessThanOrEqual', 'GreaterThan', 'GreaterThanOrEqual',
  ...NO_VALUE_OPERATORS,
];

/** Several values on one column: `In` keeps them, `NotIn` excludes them. */
export function basicFilter(target: FilterTarget, values: (string | number)[], operator: 'In' | 'NotIn' = 'In') {
  return {
    $schema: 'http://powerbi.com/product/schema#basic',
    target,
    filterType: 1,
    operator,
    values,
  };
}

/** One or two conditions on one column, combined with And / Or. */
export function advancedFilter(target: FilterTarget, logicalOperator: 'And' | 'Or', conditions: Condition[]) {
  return {
    $schema: 'http://powerbi.com/product/schema#advanced',
    target,
    filterType: 0,
    logicalOperator,
    conditions: conditions.map(c =>
      NO_VALUE_OPERATORS.includes(c.operator) ? {operator: c.operator} : {operator: c.operator, value: c.value}),
  };
}

/* ---------- Interactive component ---------- */

type Mode = 'list' | 'And' | 'Or';

const toValue = (raw: string, numeric: boolean): string | number => {
  const n = Number(raw);
  return numeric && raw.trim() !== '' && !Number.isNaN(n) ? n : raw;
};

export default function FilterBuilder(): React.JSX.Element {
  const [mode, setMode] = useState<Mode>('list');
  const [table, setTable] = useState('Data_PLS');
  const [column, setColumn] = useState('Country');
  const [numeric, setNumeric] = useState(false);
  const [listOperator, setListOperator] = useState<'In' | 'NotIn'>('In');
  const [valuesText, setValuesText] = useState('Region_A\nRegion_B');
  const [conditions, setConditions] = useState<Condition[]>([
    {operator: 'StartsWith', value: 'Region_'},
    {operator: 'IsNot', value: 'Region_A'},
  ]);
  const [copied, setCopied] = useState(false);

  const json = useMemo(() => {
    const target = {table: table.trim(), column: column.trim()};
    const filter = mode === 'list'
      ? basicFilter(
          target,
          valuesText.split(/[\n;]+/).map(v => v.trim()).filter(Boolean).map(v => toValue(v, numeric)),
          listOperator)
      : advancedFilter(
          target,
          mode,
          conditions.map(c => ({...c, value: toValue(String(c.value ?? ''), numeric)})));
    return JSON.stringify(filter);
  }, [mode, table, column, numeric, listOperator, valuesText, conditions]);

  const setCondition = (i: number, patch: Partial<Condition>) =>
    setConditions(cs => cs.map((c, j) => (j === i ? {...c, ...patch} : c)));

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(json);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable: the text stays selectable below */
    }
  };

  return (
    <div className={styles.builder}>
      <div className={styles.row}>
        <label>
          Type
          <select value={mode} onChange={e => setMode(e.target.value as Mode)}>
            <option value="list">Multiple values (In / NotIn)</option>
            <option value="And">Two conditions — AND</option>
            <option value="Or">Two conditions — OR</option>
          </select>
        </label>
        <label>
          Table
          <input value={table} onChange={e => setTable(e.target.value)} />
        </label>
        <label>
          Column
          <input value={column} onChange={e => setColumn(e.target.value)} />
        </label>
      </div>

      {mode === 'list' ? (
        <div className={styles.row}>
          <label>
            Operator
            <select value={listOperator} onChange={e => setListOperator(e.target.value as 'In' | 'NotIn')}>
              <option value="In">In (keep these values)</option>
              <option value="NotIn">NotIn (everything except)</option>
            </select>
          </label>
          <label className={styles.grow}>
            Values (one per line)
            <textarea rows={4} value={valuesText} onChange={e => setValuesText(e.target.value)} />
          </label>
        </div>
      ) : (
        conditions.map((c, i) => (
          <div className={styles.row} key={i}>
            <label>
              {i === 0 ? 'Condition 1' : `${mode.toUpperCase()} condition 2`}
              <select
                value={c.operator}
                onChange={e => setCondition(i, {operator: e.target.value as ConditionOperator})}>
                {OPERATORS.map(op => <option key={op}>{op}</option>)}
              </select>
            </label>
            <label className={styles.grow}>
              Value
              <input
                disabled={NO_VALUE_OPERATORS.includes(c.operator)}
                value={c.value ?? ''}
                onChange={e => setCondition(i, {value: e.target.value})} />
            </label>
          </div>
        ))
      )}

      <label className={styles.check}>
        <input type="checkbox" checked={numeric} onChange={e => setNumeric(e.target.checked)} />
        Numeric values (emit numbers instead of text)
      </label>

      <div className={styles.output}>
        <pre>{json}</pre>
        <button type="button" className="button button--primary button--sm" onClick={copy}>
          {copied ? 'Copied ✓' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
