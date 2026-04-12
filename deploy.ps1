# Build et déploiement
Write-Host "Construction du site..." -ForegroundColor Green
npm run build

Write-Host "Déploiement..." -ForegroundColor Green
$Env:GIT_USER = "Socio-Data-Management"
npm run deploy --
