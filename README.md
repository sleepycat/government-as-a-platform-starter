# Government As A Platform Starter

This repo contains a clonable starter app that aims to be the techincal implementation of [Richard Pope's definition](https://medium.com/digitalhks/government-as-a-platform-the-hard-problems-part-1-introduction-b57269bcdc6f) of GaaP:

>Government as a Platform is the approach of reorganizing the work of government around a network of shared APIs, open-standards and canonical datasets.

Technically that works out something like this:

<pre>
+---------------+ +-----------------+ +---------------+ +-----------------+ +---------------+
|  Gov web app  | |Internal corp app| |  Gov web app  | |3rd party IOS app| |  Gov web app  |
+---------------+ +-----------------+ +------+--------+ +--------+--------+ +------+--------+
            |              |                 |                   |                 |      
            |              |                 |    +--------------+------------+    |        
            |              |                 |    |              |            |    |       
            |   +----------+      +----------+    |              |  +--------------|      
            |   |          |      |          |    |              |  |         |    |        
            v   v          v      v          v    v              v  v         v    v      
  +---------------+ +---------------+ +---------------+ +---------------+ +---------------+
  |Gov service API| |Gov service API| |Gov service API| |Gov service API| |Gov service API|
  +---------------+ +---------------+ +---------------+ +---------------+ +---------------+
</pre>

Each service is built out as a API/consumer pair, dogfooding the API and shipping a useful service while contributing a new piece to the larger vision of a "mashable" ecosystem of Government APIs.

This splitting of API/consumer or backend/frontend is important, as [Pia Andrews explains](https://www.themandarin.com.au/118672-government-as-a-platform-the-foundation-for-digital-government-and-gov-2-0/):

>In splitting the front end from a consumable series of back end services, agencies gain the ability to more rapidly iterate the customer experience of the service, taking into account changing user needs and new user platforms (mobile is just the start — personal AI helpers, augmented reality and embedded computing are just around the corner). When the back end and front end of a service are part of the one monolithic codebase, it is simply too expensive, time-consuming, and complicated to make any changes to the service, let alone support continuous improvements or respond to changing user needs.

This purpose here then is to do the hard work to make this pattern easy enough to be replicated across the government.

## Project Structure

The separation of frontend from the api is reflected in the folder structure:

```sh
.
├── api
├── frontend
├── platform
├── README.md
└── skaffold.yaml
```
The `api` folder contains everything related to the API, the frontend contains everything for the `frontend` service and the `platform` folder will contain everything needed to create a full PBMM environment on the cloud provider of your choice and run those services within it.

Further details can be found in the readmes contained in their respective folders.

## local development

To run the app you will need [minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/), [kustomize](https://kustomize.io/), [skaffold](https://skaffold.dev/) and the [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) installed.

The basic idea: Minikube creates a virtual machine and runs Kubernetes inside. Skaffold generates the config needed to run your application using Kustomise and puts it inside Kubernetes using kubectl. From there it watches your files for changes and loads the changes files into Kubernetes as you work.


Once those are installed, start minikube and the app with the following commands:

```bash
$ minikube start
$ skaffold dev --port-forward
```

The app will be available on port 3000
