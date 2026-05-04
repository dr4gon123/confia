# config telemetry-controller agent

Configure FortiTelemetry agents managed by a FortiGate unit.

## Syntax

```
config telemetry-controller agent
    Description: Configure FortiTelemetry agents managed by a FortiGate unit.
    edit <agent-id>
        set agent-profile {string}
        set alias {string}
        set authz [rejected|authorized|...]
        set comment {var-string}
    next
end
```

## Parameters

+---------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| Parameter     | Description                       | Type                  | Size                  | Default               |
+===============+===================================+=======================+=======================+=======================+
| agent-id      | Agent ID.                         | string                | Maximum length: 19    |                       |
+---------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| agent-profile | Name of an existing agent         | string                | Maximum length: 35    |                       |
|               | profile.                          |                       |                       |                       |
+---------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| alias         | Alias used in display for ease of | string                | Maximum length: 35    |                       |
|               | distinguishing agents.            |                       |                       |                       |
+---------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| authz         | Authorization status of this      | option                | \-                    | unauthorized          |
|               | agent.                            |                       |                       |                       |
+---------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
|               | +----------------+--------------------------------------------------------+                               |
|               | | Option         | Description                                            |                               |
|               | +================+========================================================+                               |
|               | | *rejected*     | Agent is rejected.                                     |                               |
|               | +----------------+--------------------------------------------------------+                               |
|               | | *authorized*   | Agent is authorized.                                   |                               |
|               | +----------------+--------------------------------------------------------+                               |
|               | | *unauthorized* | Agent is unauthorized.                                 |                               |
|               | +----------------+--------------------------------------------------------+                               |
+---------------+-----------------------------------+-----------------------+-----------------------+-----------------------+
| comment       | Comment.                          | var-string            | Maximum length: 255   |                       |
+---------------+-----------------------------------+-----------------------+-----------------------+-----------------------+

