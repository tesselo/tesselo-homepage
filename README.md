Tesselo's Homepage
==================

Deploy with the following command.
----------------------------------

```
aws s3 sync --exclude *.html --acl public-read src/ s3://tesselo.com
aws s3 cp --content-type 'text/html' --acl public-read src/index.html s3://tesselo.com/index.html
aws s3 cp --content-type 'text/html' --acl public-read src/about.html s3://tesselo.com/about
aws s3 cp --content-type 'text/html' --acl public-read src/terms.html s3://tesselo.com/terms
aws s3 cp --content-type 'text/html' --acl public-read src/solutions-for-sustainability.html s3://tesselo.com/solutions-for-sustainability
aws s3 cp --content-type 'text/html' --acl public-read src/spatial-insights-as-a-service.html s3://tesselo.com/spatial-insights-as-a-service
```

Regex searches for inital porting
---------------------------------

```
"{% static "(.*?)" %}"

{% static "(.*?)" %}

{% static '(.*?)' %}
```
