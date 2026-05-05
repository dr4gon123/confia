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
                config content-id
                    Description: Content ID settings.
                    set end-direction [forward|backward]
                    set end-skip {integer}
                    set end-str {string}
                    set range-str {string}
                    set start-direction [forward|backward]
                    set start-skip {integer}
                    set start-str {string}
                    set target [path|parameter|...]
                end
                config match-entries
                    Description: List of entries to match.
                    edit <id>
                        set pattern <string1>, <string2>, ...
                        set target [path|parameter|...]
                    next
                end
                set match-mode [all|any]
                config skip-entries
                    Description: List of entries to skip.
                    edit <id>
                        set pattern <string1>, <string2>, ...
                        set target [path|parameter|...]
                    next
                end
                set skip-rule-mode [all|any]
            next
        end
        set status [enable|disable]
        set updateserver [enable|disable]
    next
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/cb8d6b09-b8b3-11ef-9411-ae1fcf29f169/images/f34e972408e37c744b982ab57730df2f_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 1000D,       |
|                                                                                                                                                                                      | FortiGate 1001F, FortiGate 101F, |
|                                                                                                                                                                                      | FortiGate 1101E, FortiGate 121G, |
|                                                                                                                                                                                      | FortiGate 1801F, FortiGate       |
|                                                                                                                                                                                      | 2000E, FortiGate 201E, FortiGate |
|                                                                                                                                                                                      | 201F, FortiGate 2201E, FortiGate |
|                                                                                                                                                                                      | 2500E, FortiGate 2600F,          |
|                                                                                                                                                                                      | FortiGate 2601F, FortiGate       |
|                                                                                                                                                                                      | 3000D, FortiGate 3001F,          |
|                                                                                                                                                                                      | FortiGate 301E, FortiGate 3100D, |
|                                                                                                                                                                                      | FortiGate 3200D, FortiGate       |
|                                                                                                                                                                                      | 3201F, FortiGate 3301E,          |
|                                                                                                                                                                                      | FortiGate 3401E, FortiGate       |
|                                                                                                                                                                                      | 3501F, FortiGate 3601E,          |
|                                                                                                                                                                                      | FortiGate 3700D, FortiGate       |
|                                                                                                                                                                                      | 3701F, FortiGate 401E, FortiGate |
|                                                                                                                                                                                      | 401F, FortiGate 4201F, FortiGate |
|                                                                                                                                                                                      | 4401F, FortiGate 5001E1,         |
|                                                                                                                                                                                      | FortiGate 501E, FortiGate 601E,  |
|                                                                                                                                                                                      | FortiGate 601F, FortiGate 800D,  |
|                                                                                                                                                                                      | FortiGate 900D, FortiGate 901G,  |
|                                                                                                                                                                                      | FortiGate 91G, FortiGate-VM for  |
|                                                                                                                                                                                      | Aliyun, FortiGate-VM for AWS,    |
|                                                                                                                                                                                      | FortiGate-VM for Azure,          |
|                                                                                                                                                                                      | FortiGate-VM for GCP,            |
|                                                                                                                                                                                      | FortiGate-VM for OPC,            |
|                                                                                                                                                                                      | FortiGate-VM64, FortiGateRugged  |
|                                                                                                                                                                                      | 70F, FortiWiFi 80F 2R 3G4G DSL,  |
|                                                                                                                                                                                      | FortiWiFi 81F 2R 3G4G DSL.       |
|                                                                                                                                                                                      |                                  |
|                                                                                                                                                                                      | It is not available for:         |
|                                                                                                                                                                                      | FortiGate 1000F, FortiGate 100F, |
|                                                                                                                                                                                      | FortiGate 1100E, FortiGate 120G, |
|                                                                                                                                                                                      | FortiGate 140E-POE, FortiGate    |
|                                                                                                                                                                                      | 140E, FortiGate 1800F, FortiGate |
|                                                                                                                                                                                      | 200E, FortiGate 200F, FortiGate  |
|                                                                                                                                                                                      | 2200E, FortiGate 3000F,          |
|                                                                                                                                                                                      | FortiGate 300E, FortiGate 3200F, |
|                                                                                                                                                                                      | FortiGate 3300E, FortiGate       |
|                                                                                                                                                                                      | 3400E, FortiGate 3500F,          |
|                                                                                                                                                                                      | FortiGate 3600E, FortiGate       |
|                                                                                                                                                                                      | 3700F, FortiGate 3960E,          |
|                                                                                                                                                                                      | FortiGate 3980E, FortiGate 400E  |
|                                                                                                                                                                                      | Bypass, FortiGate 400E,          |
|                                                                                                                                                                                      | FortiGate 400F, FortiGate 4200F, |
|                                                                                                                                                                                      | FortiGate 4400F, FortiGate       |
|                                                                                                                                                                                      | 5001E, FortiGate 500E, FortiGate |
|                                                                                                                                                                                      | 600E, FortiGate 600F, FortiGate  |
|                                                                                                                                                                                      | 60E DSLJ, FortiGate 60E DSL,     |
|                                                                                                                                                                                      | FortiGate 60E-POE, FortiGate     |
|                                                                                                                                                                                      | 60E, FortiGate 61E, FortiGate    |
|                                                                                                                                                                                      | 80E-POE, FortiGate 80E,          |
|                                                                                                                                                                                      | FortiGate 80F DSL, FortiGate     |
|                                                                                                                                                                                      | 81E-POE, FortiGate 81E,          |
|                                                                                                                                                                                      | FortiGate 900G, FortiGate 90E,   |
|                                                                                                                                                                                      | FortiGate 90G, FortiGate 91E,    |
|                                                                                                                                                                                      | FortiWiFi 60E DSLJ, FortiWiFi    |
|                                                                                                                                                                                      | 60E DSL, FortiWiFi 60E,          |
|                                                                                                                                                                                      | FortiWiFi 61E.                   |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

