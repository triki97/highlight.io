---
title: Python Backend
slug: python-backend
createdAt: 2022-04-01T20:28:14.000Z
updatedAt: 2022-04-15T02:07:22.000Z
---

Highlight ships the [highlight_io](https://pypi.org/project/highlight-io/) pypi module for capturing backend errors in applications with Python backends.

## Usage

The usage of this Backend SDK requires one of our [Client SDK](../1_overview.md#for-your-frontend)s to be installed, so please follow the instructions there if you have not done so.

## The `highlight_io` Python Module

If you'd like to follow an example, check out our repo for one of a [Flask app](https://github.com/highlight/highlight/blob/main/sdk/highlight-py/examples/app.py) and one of a [backend script](https://github.com/highlight/highlight/blob/main/sdk/highlight-py/examples/script.py).

First, import the package

```bash
poetry add highlight-io
# or with pip
pip install highlight-io
```

If you are uswing a Flask app, you'll need the Flask integration.

```bash
poetry add highlight-io[Flask]
# or with pip
pip install highlight-io[Flask]
```

## Adding Highlight to Flask

Import the Flask integration and setup Highlight with Flask!

```python
from flask import Flask

import highlight_io
from highlight_io.integrations.flask import FlaskIntegration

app = Flask(__name__)
H = highlight_io.H(
    "YOUR_PROJECT_ID", integrations=[FlaskIntegration()], record_logs=True
)
```

## Adding Highlight to Django

Import the Django integration in your `settings.py` file.

```python
import highlight_io
from highlight_io.integrations.django import DjangoIntegration

H = highlight_io.H("YOUR_PROJECT_ID", integrations=[DjangoIntegration()], record_logs=True)
```

## Adding Highlight to Azure Functions

Just add the `@observe_handler` decorator to your functions!

```python
import logging
import azure.functions as func

import highlight_io
from highlight_io.integrations.azure import observe_handler

H = highlight_io.H("YOUR_PROJECT_ID", record_logs=True)


@observe_handler
def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info("Python HTTP trigger function processed a request.")
    return func.HttpResponse("Hello, world.")
```

## Verify

To validate your Highlight backend setup, you can setup up a testing route handler that throws an error. For example:

```python
import logging
import random
import time

from flask import Flask

import highlight_io
from highlight_io.integrations.flask import FlaskIntegration

app = Flask(__name__)
H = highlight_io.H(
    "YOUR_PROJECT_ID", integrations=[FlaskIntegration()], record_logs=True
)


@app.route("/error")
def hello():
    for idx in range(1000):
        logging.info(f"hello {idx}")
        time.sleep(0.001)
        if random.randint(0, 100) == 1:
            raise Exception(f"random error! {idx}")
    logging.warning("made it outside the loop!")
    return "<h1>Hello, World!</h1>"


if __name__ == "__main__":
    app.run()
```

creates a `/error` route that will randomly throw an error.

To view and resolve the recorded error, log into [app.highlight.io/errors](http://app.highlight.io/errors). Clicking on the error's title will open a page where you can see detailed information and mark it as resolved.
