# Cloud Native Starter

This repo contains a clonable stater app in the cloud native style.

## local development

To run the app you will need [minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/), [kustomize](https://kustomize.io/), [skaffold](https://skaffold.dev/) and the [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) installed.

The basic idea: Minikube creates a virtual machine and runs Kubernetes inside. Skaffold generates the config needed to run your application using Kustomise and puts it inside Kubernetes using kubectl. From there it watches your files for changes and loads the changes files into Kubernetes as you work.


Once those are installed, start minikube and the app with the following commands:

```bash
$ minikube start
$ skaffold dev --port-forward
```

The app will be available on port 3000
