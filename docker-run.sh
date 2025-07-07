#!/bin/bash

# Docker build and run script for Angular application

echo "🚀 Building Angular Docker image..."

# Build the Docker image
docker build -t angular-crud-app .

if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully!"
    echo ""
    echo "🐳 Running Docker container..."
    
    # Stop and remove existing container if it exists
    docker stop angular-crud-container 2>/dev/null || true
    docker rm angular-crud-container 2>/dev/null || true
    
    # Run the container
    docker run -d --name angular-crud-container -p 8080:80 angular-crud-app
    
    if [ $? -eq 0 ]; then
        echo "✅ Container is running!"
        echo "🌐 Application is available at: http://localhost:8080"
        echo ""
        echo "📋 Useful commands:"
        echo "  - Stop container: docker stop angular-crud-container"
        echo "  - View logs: docker logs angular-crud-container"
        echo "  - Remove container: docker rm angular-crud-container"
        echo "  - Remove image: docker rmi angular-crud-app"
    else
        echo "❌ Failed to run Docker container"
        exit 1
    fi
else
    echo "❌ Failed to build Docker image"
    exit 1
fi
