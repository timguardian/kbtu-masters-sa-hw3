## Installation guide

1) Build docker image:
```sh
docker build -t express-api .
```

1.1) optional: push to docker hub:
```sh
docker tag express-api your-username/express-api
```
```sh
docker push your-username/express-api
```

2) Add prometheus stack helm repo:
```sh
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
```

3) Update helm repos:
```sh
helm repo update
```

4) Install prometheus stack:
```sh
helm install [RELEASE_NAME] prometheus-community/kube-prometheus-stack -f prometheus.yaml
```

All resoureces of the prometheus stack should start after installation.  

Make some requests to the services: `http://dev.talklike.kz/serviceA`, `http://dev.talklike.kz/welcome?name=John`  

Then "port-forward" the prometheus pod with port 9090 to your local hosts port. You will be able to access it in you browser `http://localhost:9090`.

In <b>Service Discovery</b> you can see (may take some time to be discovered) your service monitor and in <b>Targets</b> you will be able to see to which pods and service your service monitor is targeted to.