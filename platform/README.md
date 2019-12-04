# Government As A Platform: The platform

This folder will hold the configuration needed to run the application locally or on Google Kubernetes Engine, Azure Kubernetes Engine, or Amazon's Elastic Kubernetes Service in way that is compatible with the Government of Canada's PBMM standard.

Efforts like [cloud.gov](https://cloud.gov) in the US, [NECTAR](https://www.tech.gov.sg/media/technews/getting-to-know-nectar-and-apex) in Singapore or GDS's [Platform As A Service](https://www.cloud.service.gov.uk) provide a platform that ticks all the compliance boxes. Shouldering the compliance burden at the platform level allows teams to move quickly and focus on the unique part of their actual service.

As a ["platform platform"](https://www.youtube.com/watch?v=linfJyjUF10) or a ["platform for building platforms"](https://twitter.com/kelseyhightower/status/935252923721793536?lang=en) Kubernetes allows things like cloud.gov to be created with a fistful of config files and brought up on any cloud platform with a single command.

Doing this platform work here in this folder delivers benefits now and allows for an exit strategy for those adopting this approach to take their portable, conterized workloads elsewhere as Kubernetes itself sinks below the surface of the various cloud providers into services like [Cloud Run](https://cloud.google.com/run) and [EKS on Fargate](https://aws.amazon.com/blogs/aws/amazon-eks-on-aws-fargate-now-generally-available/).

## What's in here?

This contains a set of configuration files that serve as a "base" upon which environment specicific patches are applied as an "overlay" using [Kustomize](https://kustomize.io/).
The folder naming reflects these concepts and the structure will eventually look like this:

```sh
$ tree
.
├── base
└── overlays
    ├── gke
    ├── aws
    ├── azure
    └── minikube
```

Applying the patches needed to get the base config ready to run on GKE looks like the following:

```sh
kustomize build platform/overlays/gke
```
