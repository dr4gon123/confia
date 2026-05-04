# config switch-controller location

Configure FortiSwitch location services.

## Syntax

```
config switch-controller location
    Description: Configure FortiSwitch location services.
    edit <name>
        config address-civic
            Description: Configure location civic address.
            set additional {string}
            set additional-code {string}
            set block {string}
            set branch-road {string}
            set building {string}
            set city {string}
            set city-division {string}
            set country {string}
            set country-subdivision {string}
            set county {string}
            set direction {string}
            set floor {string}
            set landmark {string}
            set language {string}
            set name {string}
            set number {string}
            set number-suffix {string}
            set parent-key {string}
            set place-type {string}
            set post-office-box {string}
            set postal-community {string}
            set primary-road {string}
            set road-section {string}
            set room {string}
            set script {string}
            set seat {string}
            set street {string}
            set street-name-post-mod {string}
            set street-name-pre-mod {string}
            set street-suffix {string}
            set sub-branch-road {string}
            set trailing-str-suffix {string}
            set unit {string}
            set zip {string}
        end
        config coordinates
            Description: Configure location GPS coordinates.
            set altitude {string}
            set altitude-unit [m|f]
            set datum [WGS84|NAD83|...]
            set latitude {string}
            set longitude {string}
            set parent-key {string}
        end
        config elin-number
            Description: Configure location ELIN number.
            set elin-num {string}
            set parent-key {string}
        end
    next
end
```

## Parameters

+-----------+-----------------------------------+--------+---------+---------+
| Parameter | Description                       | Type   | Size    | Default |
+===========+===================================+========+=========+=========+
| name      | Unique location item name.        | string | Maximum |         |
|           |                                   |        | length: |         |
|           |                                   |        | 63      |         |
+-----------+-----------------------------------+--------+---------+---------+

