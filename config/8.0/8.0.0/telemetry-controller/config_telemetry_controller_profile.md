# config telemetry-controller profile

Configure FortiTelemetry profiles.

## Syntax

```
config telemetry-controller profile
    Description: Configure FortiTelemetry profiles.
    edit <name>
        config application
            Description: Configure applications.
            edit <id>
                set app-name {string}
                set interval {integer}
                set monitor [enable|disable]
                config sla
                    Description: Service level agreement (SLA).
                    set app-throughput-threshold {integer}
                    set atdt-threshold {integer}
                    set dns-time-threshold {integer}
                    set experience-score-threshold {integer}
                    set failure-rate-threshold {integer}
                    set jitter-threshold {integer}
                    set latency-threshold {integer}
                    set packet-loss-threshold {integer}
                    set sla-factor {option1}, {option2}, ...
                    set tcp-rtt-threshold {integer}
                    set tls-time-threshold {integer}
                    set ttfb-threshold {integer}
                end
            next
        end
        set comment {var-string}
    next
end
```

## Parameters

+-----------+-----------------------------------+------------+---------+---------+
| Parameter | Description                       | Type       | Size    | Default |
+===========+===================================+============+=========+=========+
| comment   | Comment.                          | var-string | Maximum |         |
|           |                                   |            | length: |         |
|           |                                   |            | 255     |         |
+-----------+-----------------------------------+------------+---------+---------+
| name      | Name of the profile.              | string     | Maximum |         |
|           |                                   |            | length: |         |
|           |                                   |            | 35      |         |
+-----------+-----------------------------------+------------+---------+---------+

