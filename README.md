# Volcano dashboard

## Overview

The volcano dashboard provides a basic dashboard that can be easily deployed in your kubernetes cluster to show the status of resources including volcano jobs, queues, pods, etc.

<img src="docs/images/demo.gif" alt="volcano dashboard" style="zoom:50%;" />

## Design

You can follow the [design doc](docs/design.md) to learn more about the design details.

## Quick Start

### Prerequisites

Please follow the [guide](https://github.com/volcano-sh/volcano#quick-start-guide) to install volcano first.

### Install volcano dashboard

Login one node of your kubernetes cluster and execute the following command to install volcano dashboard.
```shell
kubectl create ns volcano-system

kubectl apply -f https://raw.githubusercontent.com/volcano-sh/dashboard/main/deployment/volcano-dashboard.yaml
```

Then use the following command to map the traffic to node.
```shell
kubectl port-forward svc/volcano-dashboard 8080:80 -n volcano-system --address 0.0.0.0
```

Access the dashboard by navigate to `http://$YOUR_NODE_IP:8080` in your browser.

If running locally navigate to `http://localhost:8080`


## Development

Clone the repo.

```shell
git clone https://github.com/volcano-sh/dashboard.git
```

### Locally

Follow the prerequisites to install volcano first

```shell
npm install
```

```shell
npm run dev
```


### Inside kubernetes cluster
You can build the volcano dashboard images locally. Please use the following command to build docker images of volcano dashboard.

Build images.
```shell
// build frontend image.
docker build -t frontend:dev . -f deployment/build/frontend/Dockerfile 
// build backend image.
docker build -t backend:dev . -f deployment/build/backend/Dockerfile
```

After that you can replace the images in `volcano-dashboard.yaml` to verify the result.

```shell
kubectl apply -f deployment/volcano-dashboard.yaml
```