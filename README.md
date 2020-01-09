Tesselo's Homepage
==================

Deploy with the following command.
----------------------------------

```
aws s3 sync --acl public-read src/ s3://tesselo.com
```

Regex searches for inital porting
---------------------------------

```
"{% static "(.*?)" %}"

{% static "(.*?)" %}

{% static '(.*?)' %}
```
