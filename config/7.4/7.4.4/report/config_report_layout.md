# config report layout

Report layout configuration.

## Syntax

```
config report layout
    Description: Report layout configuration.
    edit <name>
        config body-item
            Description: Configure report body item.
            edit <id>
                set description {string}
                set type [text|image|...]
                set style {string}
                set top-n {integer}
                config parameters
                    Description: Parameters.
                    edit <id>
                        set name {string}
                        set value {string}
                    next
                end
                set text-component [text|heading1|...]
                set content {string}
                set img-src {string}
                set chart {string}
                set chart-options {option1}, {option2}, ...
                set misc-component [hline|page-break|...]
                set title {string}
            next
        end
        set cutoff-option [run-time|custom]
        set cutoff-time {user}
        set day [sunday|monday|...]
        set description {string}
        set email-recipients {string}
        set email-send [enable|disable]
        set format {option1}, {option2}, ...
        set max-pdf-report {integer}
        set options {option1}, {option2}, ...
        config page
            Description: Configure report page.
            set paper [a4|letter]
            set column-break-before {option1}, {option2}, ...
            set page-break-before {option1}, {option2}, ...
            set options {option1}, {option2}, ...
            config header
                Description: Configure report page header.
                set style {string}
                config header-item
                    Description: Configure report header item.
                    edit <id>
                        set description {string}
                        set type [text|image]
                        set style {string}
                        set content {string}
                        set img-src {string}
                    next
                end
            end
            config footer
                Description: Configure report page footer.
                set style {string}
                config footer-item
                    Description: Configure report footer item.
                    edit <id>
                        set description {string}
                        set type [text|image]
                        set style {string}
                        set content {string}
                        set img-src {string}
                    next
                end
            end
        end
        set schedule-type [demand|daily|...]
        set style-theme {string}
        set subtitle {string}
        set time {user}
        set title {string}
    next
end
```

## Parameters

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| ![Note](https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/a86fc432-0bd9-11ef-8c42-fa163e15d75b/images/c8d0f0ab9c512db953bc8b7bbd12b5df_Icon-Light-Bulb.png "Note") | This command is available for    |
|                                                                                                                                                                                      | model(s): FortiGate 1000D,       |
|                                                                                                                                                                                      | FortiGate 1001F, FortiGate 101F, |
|                                                                                                                                                                                      | FortiGate 1101E, FortiGate       |
|                                                                                                                                                                                      | 1801F, FortiGate 2000E,          |
|                                                                                                                                                                                      | FortiGate 201E, FortiGate 201F,  |
|                                                                                                                                                                                      | FortiGate 2201E, FortiGate       |
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
|                                                                                                                                                                                      | FortiGate 601F, FortiGate 61E,   |
|                                                                                                                                                                                      | FortiGate 61F, FortiGate 71F,    |
|                                                                                                                                                                                      | FortiGate 800D, FortiGate        |
|                                                                                                                                                                                      | 81E-POE, FortiGate 81E,          |
|                                                                                                                                                                                      | FortiGate 81F-POE, FortiGate     |
|                                                                                                                                                                                      | 81F, FortiGate 900D, FortiGate   |
|                                                                                                                                                                                      | 91E, FortiGate VM64,             |
|                                                                                                                                                                                      | FortiGateRugged 70F 3G4G,        |
|                                                                                                                                                                                      | FortiGateRugged 70F, FortiWiFi   |
|                                                                                                                                                                                      | 61E, FortiWiFi 61F, FortiWiFi    |
|                                                                                                                                                                                      | 81F 2R 3G4G-POE, FortiWiFi 81F   |
|                                                                                                                                                                                      | 2R-POE, FortiWiFi 81F 2R.        |
|                                                                                                                                                                                      |                                  |
|                                                                                                                                                                                      | It is not available for:         |
|                                                                                                                                                                                      | FortiGate 1000F, FortiGate 100F, |
|                                                                                                                                                                                      | FortiGate 1100E, FortiGate       |
|                                                                                                                                                                                      | 140E-POE, FortiGate 140E,        |
|                                                                                                                                                                                      | FortiGate 1800F, FortiGate 200E, |
|                                                                                                                                                                                      | FortiGate 200F, FortiGate 2200E, |
|                                                                                                                                                                                      | FortiGate 3000F, FortiGate 300E, |
|                                                                                                                                                                                      | FortiGate 3200F, FortiGate       |
|                                                                                                                                                                                      | 3300E, FortiGate 3400E,          |
|                                                                                                                                                                                      | FortiGate 3500F, FortiGate       |
|                                                                                                                                                                                      | 3600E, FortiGate 3700F,          |
|                                                                                                                                                                                      | FortiGate 3960E, FortiGate       |
|                                                                                                                                                                                      | 3980E, FortiGate 400E Bypass,    |
|                                                                                                                                                                                      | FortiGate 400E, FortiGate 400F,  |
|                                                                                                                                                                                      | FortiGate 40F 3G4G, FortiGate    |
|                                                                                                                                                                                      | 40F, FortiGate 4200F, FortiGate  |
|                                                                                                                                                                                      | 4400F, FortiGate 5001E,          |
|                                                                                                                                                                                      | FortiGate 500E, FortiGate 600E,  |
|                                                                                                                                                                                      | FortiGate 600F, FortiGate 60E    |
|                                                                                                                                                                                      | DSLJ, FortiGate 60E DSL,         |
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

