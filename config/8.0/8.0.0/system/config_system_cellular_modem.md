# config system cellular-modem

Configure USB cellular modems.

## Syntax

```
config system cellular-modem
    Description: Configure USB cellular modems.
    config modem1
        Description: Configure cellular Modem1.
        set carrier-config [auto-gcf|auto-ptcrb|...]
        set custom-ipv4-netmask {ipv4-netmask}
        set default-gateway [auto|none]
        set default-netmask [auto|custom]
        set gps-antenna-type [passive|active]
        set gps-service [enable|disable]
        set network-type [auto|4g|5g|...]
        config sim-switch
            Description: Configure SIM card switch.
            set active-sim-slot [slot-1|slot-2]
            set by-connection-state [enable|disable]
            set by-link-monitor [enable|disable]
            set by-sim-state [enable|disable]
            set link-monitor {string}
            set modem-disconnection-time {integer}
            set sim-switch-log-alert-interval {integer}
            set sim-switch-log-alert-threshold {integer}
        end
        set sim1-data-plan {string}
        set sim1-pin {password}
        set sim2-data-plan {string}
        set sim2-pin {password}
        set status [online|low-power]
    end
    config modem2
        Description: Configure cellular Modem2.
        set carrier-config [auto-gcf|auto-ptcrb|...]
        set custom-ipv4-netmask {ipv4-netmask}
        set default-gateway [auto|none]
        set default-netmask [auto|custom]
        set gps-service [enable|disable]
        set network-type [auto|4g|5g|...]
        set sim-data-plan {string}
        set sim-pin {password}
        set status [online|low-power]
    end
    set status [enable|disable]
end
```

## Parameters

+-----------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter | Description                       | Type               | Size               | Default            |
+===========+===================================+====================+====================+====================+
| status    | Enable/disable USB cellular modem | option             | \-                 | enable             |
|           | daemon.                           |                    |                    |                    |
+-----------+-----------------------------------+--------------------+--------------------+--------------------+
|           | +-------------+--------------------------------------------------------+                         |
|           | | Option      | Description                                            |                         |
|           | +=============+========================================================+                         |
|           | | *enable*    | Enable USB cellular modem daemon.                      |                         |
|           | +-------------+--------------------------------------------------------+                         |
|           | | *disable*   | Disable USB cellular modem daemon.                     |                         |
|           | +-------------+--------------------------------------------------------+                         |
+-----------+--------------------------------------------------------------------------------------------------+

