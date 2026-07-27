$key = Get-Content "3759bc9b8bed46c2bd8dc13f66bcbce2.txt" -Raw
$key = $key.Trim()

$urls = @(
    "https://barlaslawcompany.vercel.app/",
    "https://barlaslawcompany.vercel.app/about",
    "https://barlaslawcompany.vercel.app/expertise",
    "https://barlaslawcompany.vercel.app/people",
    "https://barlaslawcompany.vercel.app/contact"
)

$body = @{
    host = "barlaslawcompany.vercel.app"
    key = $key
    keyLocation = "https://barlaslawcompany.vercel.app/$key.txt"
    urlList = $urls
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "https://api.indexnow.org/indexnow" -Method Post -Body $body -ContentType "application/json" -ErrorAction Stop
    Write-Host "IndexNow submission successful: $($response | ConvertTo-Json)"
} catch {
    $statusCode = $_.Exception.Response.StatusCode.value__
    if ($statusCode -eq 200 -or $null -eq $statusCode) {
        Write-Host "IndexNow submission accepted (HTTP 200)"
    } else {
        Write-Host "IndexNow submission returned HTTP $statusCode"
        Write-Host $_.Exception.Message
    }
}

Write-Host "Submitted $($urls.Count) URLs to IndexNow"
