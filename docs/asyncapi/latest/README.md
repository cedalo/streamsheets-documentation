# HowTo

Generated using the asyncapi generator with the html-template:

```sh
ag <location of mosquitto-premium>/plugins/premium/ha/asyncapi.yml @asyncapi/html-template -o ha --force-write -p favicon=../../../static/img/favicon-32x32.png
ag <location of mosquitto-premium>/plugins/premium/certificate-management/asyncapi.yml @asyncapi/html-template -o cert-management --force-write -p favicon=../../../static/img/favicon-32x32.png
ag <location of mosquitto-premium>/src/asyncapi.yml @asyncapi/html-template -o broker --force-write -p favicon=../../../static/img/favicon-32x32.png
ag <location of mosquitto-premium>/plugins/premium/inspect/asyncapi.yml @asyncapi/html-template -o client-inspect --force-write -p favicon=../../../static/img/favicon-32x32.png
ag <location of mosquitto-premium>/plugins/premium/client-control/asyncapi.yml @asyncapi/html-template -o client-control --force-write -p favicon=../../../static/img/favicon-32x32.png
```
