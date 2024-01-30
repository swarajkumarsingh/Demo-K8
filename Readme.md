## Demo-k8
This repo shows a basic boilerplate code of NodeJS to test k8 with minikube(local env)

## Get started
```
# Start minkube(docker)
minikube start --driver=docker

# Set alias for k8
alias k8=kubectl

# k8 apply -f <file-name>.yaml
```

## Get k8 status
```
k8 get pods
k8 get deploy
k8 get svc
```

## K8 Dashboard
```
minikube dashboard
```

## Expose k8 deployment
```
 minikube service <service-name>
```

## Stop minkube
```
k8 delete all -all
minkube stop # optional
minkube delete 
```

## Contact

- Swaraj Singh <br> <br>
  <a  href="https://www.linkedin.com/in/swarajkumarsingh/" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>
  <a href="sswaraj169@gmail.com"><img  alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />

  feel free to contact me!
