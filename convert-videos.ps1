#Requires -Version 5.1
<#
Converts all .mp4 files in docs/docs/images/ to .webm in docs/static/videos/
using ffmpeg (libvpx-vp9, CRF 32, no audio). On success, moves the source
.mp4 to the Windows Recycle Bin.
#>

$ErrorActionPreference = "Stop"

$ffmpeg    = "C:\Users\OlivierHennebelle\source\ffmpeg\bin\ffmpeg.exe"
$scriptDir = $PSScriptRoot
$sourceDir = Join-Path $scriptDir "docs\images"
$targetDir = Join-Path $scriptDir "static\videos"

if (-not (Test-Path $ffmpeg))    { throw "ffmpeg not found: $ffmpeg" }
if (-not (Test-Path $sourceDir)) { throw "Source folder not found: $sourceDir" }
if (-not (Test-Path $targetDir)) { New-Item -ItemType Directory -Path $targetDir | Out-Null }

Add-Type -AssemblyName Microsoft.VisualBasic

$mp4Files = Get-ChildItem -Path $sourceDir -Filter *.mp4 -File
if ($mp4Files.Count -eq 0) {
    Write-Host "No .mp4 files found in $sourceDir" -ForegroundColor Yellow
    return
}

foreach ($file in $mp4Files) {
    $outputName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name) + ".webm"
    $outputPath = Join-Path $targetDir $outputName

    Write-Host "Converting $($file.Name) -> $outputName" -ForegroundColor Cyan
    & $ffmpeg -y -i $file.FullName -c:v libvpx-vp9 -crf 32 -b:v 0 -an $outputPath

    if ($LASTEXITCODE -ne 0) {
        Write-Host "FAILED: $($file.Name) (ffmpeg exit code $LASTEXITCODE)" -ForegroundColor Red
        continue
    }

    Write-Host "OK: $outputName" -ForegroundColor Green

    [Microsoft.VisualBasic.FileIO.FileSystem]::DeleteFile(
        $file.FullName,
        [Microsoft.VisualBasic.FileIO.UIOption]::OnlyErrorDialogs,
        [Microsoft.VisualBasic.FileIO.RecycleOption]::SendToRecycleBin
    )
    Write-Host "Moved to Recycle Bin: $($file.Name)" -ForegroundColor DarkGray
}

Write-Host "`nDone." -ForegroundColor Green
