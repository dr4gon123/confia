# config telemetry-controller application predefine

Configure FortiTelemetry predefined applications.

## Syntax

```
config telemetry-controller application predefine
    Description: Configure FortiTelemetry predefined applications.
    edit <app-name>
        set comment {var-string}
    next
end
```

## Parameters

+-----------+-----------------------------------+------------+---------+---------+
| Parameter | Description                       | Type       | Size    | Default |
+===========+===================================+============+=========+=========+
| app-name  | Application name.                 | string     | Maximum |         |
|           |                                   |            | length: |         |
|           |                                   |            | 79      |         |
+-----------+-----------------------------------+------------+---------+---------+
| comment   | Comment. Read-only.               | var-string | Maximum |         |
|           |                                   |            | length: |         |
|           |                                   |            | 255     |         |
+-----------+-----------------------------------+------------+---------+---------+

