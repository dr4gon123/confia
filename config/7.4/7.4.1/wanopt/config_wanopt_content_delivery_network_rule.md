# config wanopt content-delivery-network-rule

Configure WAN optimization content delivery network rules.

## Syntax

```
config wanopt content-delivery-network-rule
    Description: Configure WAN optimization content delivery network rules.
    edit <name>
        set category [vcache|youtube]
        set comment {var-string}
        set host-domain-name-suffix <name1>, <name2>, ...
        set request-cache-control [enable|disable]
        set response-cache-control [enable|disable]
        set response-expires [enable|disable]
        config rules
            Description: WAN optimization content delivery network rule entries.
            edit <name>
                set match-mode [all|any]
                set skip-rule-mode [all|any]
                config match-entries
                    Description: List of entries to match.
                    edit <id>
                        set target [path|parameter|...]
                        set pattern <string1>, <string2>, ...
                    next
                end
                config skip-entries
                    Description: List of entries to skip.
                    edit <id>
                        set target [path|parameter|...]
                        set pattern <string1>, <string2>, ...
                    next
                end
                config content-id
                    Description: Content ID settings.
                    set target [path|parameter|...]
                    set start-str {string}
                    set start-skip {integer}
                    set start-direction [forward|backward]
                    set end-str {string}
                    set end-skip {integer}
                    set end-direction [forward|backward]
                    set range-str {string}
                end
            next
        end
        set status [enable|disable]
        set updateserver [enable|disable]
    next
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/f2fdc419-484a-11ee-8e6d-fa163e15d75b/images/fd8569c03b167b49cc47d5280232fc7b_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 1000D,       |
|                                                                                                                                                                                      | FortiGate 101F, FortiGate 1101E, |
|                                                                                                                                                                                      | FortiGate 1801F, FortiGate       |
|                                                                                                                                                                                      | 2000E, FortiGate 201E, FortiGate |
|                                                                                                                                                                                      | 201F, FortiGate 2201E, FortiGate |
|                                                                                                                                                                                      | 2500E, FortiGate 2600F,          |
|                                                                                                                                                                                      | FortiGate 3000D, FortiGate 301E, |
|                                                                                                                                                                                      | FortiGate 3100D, FortiGate       |
|                                                                                                                                                                                      | 3200D, FortiGate 3301E,          |
|                                                                                                                                                                                      | FortiGate 3401E, FortiGate       |
|                                                                                                                                                                                      | 3601E, FortiGate 3700D,          |
|                                                                                                                                                                                      | FortiGate 401E, FortiGate 401F,  |
|                                                                                                                                                                                      | FortiGate 4201F, FortiGate       |
|                                                                                                                                                                                      | 5001E1, FortiGate 501E,          |
|                                                                                                                                                                                      | FortiGate 601E, FortiGate 601F,  |
|                                                                                                                                                                                      | FortiGate 61E, FortiGate 61F,    |
|                                                                                                                                                                                      | FortiGate 71F, FortiGate 800D,   |
|                                                                                                                                                                                      | FortiGate 81E-POE, FortiGate     |
|                                                                                                                                                                                      | 81E, FortiGate 81F-POE,          |
|                                                                                                                                                                                      | FortiGate 81F, FortiGate 900D,   |
|                                                                                                                                                                                      | FortiGate 91E, FortiGateRugged   |
|                                                                                                                                                                                      | 70F 3G4G, FortiGateRugged 70F,   |
|                                                                                                                                                                                      | FortiWiFi 61E, FortiWiFi 61F,    |
|                                                                                                                                                                                      | FortiWiFi 81F 2R 3G4G-POE,       |
|                                                                                                                                                                                      | FortiWiFi 81F 2R-POE, FortiWiFi  |
|                                                                                                                                                                                      | 81F 2R.                          |
|                                                                                                                                                                                      |                                  |
|                                                                                                                                                                                      | It is not available for:         |
|                                                                                                                                                                                      | FortiGate 100F, FortiGate 1100E, |
|                                                                                                                                                                                      | FortiGate 140E-POE, FortiGate    |
|                                                                                                                                                                                      | 140E, FortiGate 1800F, FortiGate |
|                                                                                                                                                                                      | 200E, FortiGate 200F, FortiGate  |
|                                                                                                                                                                                      | 2200E, FortiGate 300E, FortiGate |
|                                                                                                                                                                                      | 3300E, FortiGate 3400E,          |
|                                                                                                                                                                                      | FortiGate 3600E, FortiGate       |
|                                                                                                                                                                                      | 3960E, FortiGate 3980E,          |
|                                                                                                                                                                                      | FortiGate 400E Bypass, FortiGate |
|                                                                                                                                                                                      | 400E, FortiGate 400F, FortiGate  |
|                                                                                                                                                                                      | 40F 3G4G, FortiGate 40F,         |
|                                                                                                                                                                                      | FortiGate 4200F, FortiGate       |
|                                                                                                                                                                                      | 5001E, FortiGate 500E, FortiGate |
|                                                                                                                                                                                      | 600E, FortiGate 600F, FortiGate  |
|                                                                                                                                                                                      | 60E DSLJ, FortiGate 60E DSL,     |
|                                                                                                                                                                                      | FortiGate 60E-POE, FortiGate     |
|                                                                                                                                                                                      | 60E, FortiGate 60F, FortiGate    |
|                                                                                                                                                                                      | 70F, FortiGate 80E-POE,          |
|                                                                                                                                                                                      | FortiGate 80E, FortiGate 80F     |
|                                                                                                                                                                                      | Bypass, FortiGate 80F-POE,       |
|                                                                                                                                                                                      | FortiGate 80F, FortiGate 90E,    |
|                                                                                                                                                                                      | FortiGateRugged 60F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 60F, FortiWiFi   |
|                                                                                                                                                                                      | 40F 3G4G, FortiWiFi 40F,         |
|                                                                                                                                                                                      | FortiWiFi 60E DSLJ, FortiWiFi    |
|                                                                                                                                                                                      | 60E DSL, FortiWiFi 60E,          |
|                                                                                                                                                                                      | FortiWiFi 60F, FortiWiFi 80F 2R. |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

