echo "Name,CPU%,MemUsage" > stats-full-500.csv

while true; do
    docker stats --no-stream --format '{{.Name}},{{.CPUPerc}},{{.MemUsage}}' assignment3-sa-full-web-1 >> stats-full-500.csv
    sleep 5
done