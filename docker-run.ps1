# Docker build and run script for Angular application (Windows PowerShell)

Write-Host "🚀 Building Angular Docker image..." -ForegroundColor Yellow

# Build the Docker image
docker build -t angular-crud-app .

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Docker image built successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🐳 Running Docker container..." -ForegroundColor Yellow
    
    # Stop and remove existing container if it exists
    docker stop angular-crud-container 2>$null
    docker rm angular-crud-container 2>$null
    
    # Run the container
    docker run -d --name angular-crud-container -p 8080:80 angular-crud-app
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Container is running!" -ForegroundColor Green
        Write-Host "🌐 Application is available at: http://localhost:8080" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "📋 Useful commands:" -ForegroundColor White
        Write-Host "  - Stop container: docker stop angular-crud-container" -ForegroundColor Gray
        Write-Host "  - View logs: docker logs angular-crud-container" -ForegroundColor Gray
        Write-Host "  - Remove container: docker rm angular-crud-container" -ForegroundColor Gray
        Write-Host "  - Remove image: docker rmi angular-crud-app" -ForegroundColor Gray
    } else {
        Write-Host "❌ Failed to run Docker container" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "❌ Failed to build Docker image" -ForegroundColor Red
    exit 1
}
