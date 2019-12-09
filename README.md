# Government As A Platform Starter

This repo contains a clonable starter app that aims to be the techincal implementation of [Richard Pope's definition](https://medium.com/digitalhks/government-as-a-platform-the-hard-problems-part-1-introduction-b57269bcdc6f) of GaaP.

## GaaP:

>Government as a Platform is the approach of reorganizing the work of government around a network of shared APIs, open-standards and canonical data registers. The hope is that this will allow public servants, businesses, and others to deliver radically better services to the public, and to do so safely, efficiently, democratically, and in a more accountable way.<cite>Richard Pope</cite>

Richard Pope gives us a clear definition, but for clues on how to implement such a thing we get our first hint by looking to API guidance in the [TBS Directive on Management of Information Technology](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=15249#claD.2.2.4) which advises to "Validate your API design by consuming it with a production application within your organization."

This implied separation between of API/consumer or backend/frontend is explicit in the writings of [Pia Andrews](https://www.themandarin.com.au/118672-government-as-a-platform-the-foundation-for-digital-government-and-gov-2-0/):

>In splitting the front end from a consumable series of back end services, agencies gain the ability to more rapidly iterate the customer experience of the service, taking into account changing user needs and new user platforms (mobile is just the start — personal AI helpers, augmented reality and embedded computing are just around the corner). When the back end and front end of a service are part of the one monolithic codebase, it is simply too expensive, time-consuming, and complicated to make any changes to the service, let alone support continuous improvements or respond to changing user needs.

What is suggested then is that each services be built as a API/consumer pair, [dogfooding](https://apiguide.readthedocs.io/en/latest/principles/dogfood.html) the API and shipping a useful service while contributing a new piece to the larger vision of a "mashable" ecosystem of Government APIs.

After creating a few projects in this architectural style, that that separation of API/consumer creates something like this:
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

## The GaaP starter project

Building a service out of smaller collaborating services has a learning curve. Everything from testing, to deployment, to source control is subtly different. There are also some specific pitfalls (like tightly coupled services) that can be avoided with a little guidance and some good patterns.

This purpose here then is to do the hard work to make the patterns involved in this building style easy enough to be replicated across the government.

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

The [api](api/README.md) folder contains everything related to the `api` service, the [frontend](frontend/README.md) contains everything for the `frontend` service and the [platform](platform/README.md) folder will contain everything needed to create a full PBMM environment on the cloud provider of your choice and run those services within it.

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

