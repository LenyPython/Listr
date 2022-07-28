A attempt to create a jira like to do tables with backend

create a docker postgresql container with credentials:

docker run --name Listr-back -e POSTGRES_PASSWORD=123 -p 5432:5432 -v post:/var/lib/postgresql/data -d postgres:14-alpine
