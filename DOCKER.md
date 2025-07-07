# 🐳 Docker Setup para Aplicação Angular

Este documento descreve como executar a aplicação Angular usando Docker.

## 📋 Pré-requisitos

- Docker instalado na máquina
- Docker Compose (opcional, mas recomendado)

## 🚀 Formas de Executar

### 1. Usando Docker Compose (Recomendado)

```bash
# Construir e executar
docker-compose up --build

# Executar em background
docker-compose up -d --build

# Parar a aplicação
docker-compose down
```

### 2. Usando Docker diretamente

```bash
# Construir a imagem
docker build -t angular-crud-app .

# Executar o container
docker run -d --name angular-crud-container -p 8080:80 angular-crud-app
```

### 3. Usando scripts auxiliares

**Linux/Mac:**
```bash
chmod +x docker-run.sh
./docker-run.sh
```

**Windows PowerShell:**
```powershell
.\docker-run.ps1
```

## 🌐 Acessando a Aplicação

Após executar qualquer um dos métodos acima, a aplicação estará disponível em:
- **URL:** http://localhost:8080

## 📊 Comandos Úteis

```bash
# Ver logs do container
docker logs angular-crud-container

# Acessar o container
docker exec -it angular-crud-container sh

# Parar o container
docker stop angular-crud-container

# Remover o container
docker rm angular-crud-container

# Remover a imagem
docker rmi angular-crud-app

# Ver containers em execução
docker ps

# Ver todas as imagens
docker images
```

## 🔧 Estrutura do Docker

### Dockerfile
- **Stage 1 (Build):** Usa Node.js 16 Alpine para construir a aplicação
- **Stage 2 (Production):** Usa Nginx Alpine para servir os arquivos estáticos

### Arquivos de Configuração
- `Dockerfile` - Definição da imagem Docker
- `docker-compose.yml` - Orquestração com Docker Compose
- `nginx.conf` - Configuração customizada do Nginx
- `.dockerignore` - Arquivos ignorados no build

### Otimizações Incluídas
- ✅ Multi-stage build para reduzir tamanho da imagem
- ✅ Cache de dependências npm
- ✅ Configuração otimizada do Nginx
- ✅ Suporte a roteamento Angular (SPA)
- ✅ Compressão gzip
- ✅ Headers de segurança
- ✅ Cache de assets estáticos

## 🛠️ Troubleshooting

### Problema: Porta já em uso
```bash
# Verificar o que está usando a porta 8080
netstat -tulpn | grep 8080

# Usar uma porta diferente
docker run -d --name angular-crud-container -p 9000:80 angular-crud-app
```

### Problema: Erro de build
```bash
# Limpar cache do Docker
docker system prune -a

# Rebuild sem cache
docker build --no-cache -t angular-crud-app .
```

### Problema: Container não inicia
```bash
# Ver logs detalhados
docker logs angular-crud-container

# Verificar se a imagem foi criada
docker images | grep angular-crud-app
```

## 🔒 Variáveis de Ambiente

Para adicionar variáveis de ambiente, modifique o `docker-compose.yml`:

```yaml
services:
  angular-app:
    environment:
      - ENV=production
      - API_URL=https://api.exemplo.com
```

## 📦 Tamanho da Imagem

A imagem final é otimizada e contém apenas:
- Nginx Alpine (~6MB)
- Arquivos compilados da aplicação Angular (~2-5MB)
- Configurações necessárias

**Tamanho total estimado: ~10-15MB**
