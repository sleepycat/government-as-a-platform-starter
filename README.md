# Cloud Native Starter

This repo contains a clonable stater app in the cloud native style.

## local development

To run the app in dev mode you will need [minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/), [skaffold](https://skaffold.dev/) and the [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) command installed.

Once those are installed, start minikube and the app with the following commands:

```bash
$ minikube start
$ skaffold dev --port-forward
```

The app will be available on port 3000
