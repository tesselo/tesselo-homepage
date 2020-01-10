Tesselo's Homepage
==================

Deploy with the following command.
----------------------------------

```sh
bucket=dev.tesselo.com
aws s3 sync --exclude *.html --acl public-read src/ s3://$bucket
aws s3 cp --content-type 'text/html' --acl public-read src/index.html s3://$bucket/index.html
aws s3 cp --content-type 'text/html' --acl public-read src/about.html s3://$bucket/about
aws s3 cp --content-type 'text/html' --acl public-read src/terms.html s3://$bucket/terms
aws s3 cp --content-type 'text/html' --acl public-read src/solutions-for-sustainability.html s3://$bucket/solutions-for-sustainability
aws s3 cp --content-type 'text/html' --acl public-read src/spatial-insights-as-a-service.html s3://$bucket/spatial-insights-as-a-service
```

Regex searches for inital porting
---------------------------------

```
"{% static "(.*?)" %}"

{% static "(.*?)" %}

{% static '(.*?)' %}
```
