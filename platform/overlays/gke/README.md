# Running on Google Kubernetes Engine

To run this application on GKE, create a cluster. Any cluster setting you want should work. If you don't have any strong opinions, this is a resonable starting place:

```sh
gcloud beta container --project "government-as-a-platform" clusters create "gaap" --region "northamerica-northeast1" --no-enable-basic-auth --release-channel "rapid" --machine-type "n1-standard-1" --image-type "COS" --disk-type "pd-standard" --disk-size "100" --metadata disable-legacy-endpoints=true --scopes "https://www.googleapis.com/auth/devstorage.read_only","https://www.googleapis.com/auth/logging.write","https://www.googleapis.com/auth/monitoring","https://www.googleapis.com/auth/servicecontrol","https://www.googleapis.com/auth/service.management.readonly","https://www.googleapis.com/auth/trace.append" --num-nodes "1" --enable-stackdriver-kubernetes --enable-ip-alias --network "projects/government-as-a-platform/global/networks/default" --subnetwork "projects/government-as-a-platform/regions/northamerica-northeast1/subnetworks/default" --default-max-pods-per-node "110" --addons HorizontalPodAutoscaling,HttpLoadBalancing --enable-autoupgrade --enable-autorepair --database-encryption-key "projects/government-as-a-platform/locations/northamerica-northeast1/keyRings/gaap-k8s/cryptoKeys/default"
```

When you have a freshly created cluster, generate the config with kustomize and
pipe the output to kubectl:

```sh
kustomize build platform/overlays/gke | kubectl apply -f -
```
