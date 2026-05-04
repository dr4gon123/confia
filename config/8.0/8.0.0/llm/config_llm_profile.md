# config llm profile

Configure LLM Proxy profiles.

## Syntax

```
config llm profile
    Description: Configure LLM Proxy profiles.
    edit <name>
        config chat
            Description: LLM Proxy chat completions API (/v1/chat/completions).
            set max-completion-tokens {integer}
            set max-req-len {integer}
            set status [enable|disable]
            set stream [bypass|block]
            set system-prompt {var-string}
            set system-prompt-mode [bypass|replace|...]
        end
        config image-gen
            Description: LLM Proxy image generation API (/v1/images/generations).
            set status [enable|disable]
        end
        config list-models
            Description: LLM Proxy list models API (/v1/models).
            set status [enable|disable]
        end
        set log [none|blocked|...]
        set unknown-api [enable|disable]
    next
end
```

## Parameters

+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| Parameter   | Description                       | Type               | Size               | Default            |
+=============+===================================+====================+====================+====================+
| log         | Log option.                       | option             | \-                 | blocked            |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
|             | +-------------+--------------------------------------------------------+                         |
|             | | Option      | Description                                            |                         |
|             | +=============+========================================================+                         |
|             | | *none*      | No log.                                                |                         |
|             | +-------------+--------------------------------------------------------+                         |
|             | | *blocked*   | Log blocked requests.                                  |                         |
|             | +-------------+--------------------------------------------------------+                         |
|             | | *all*       | Log all requests.                                      |                         |
|             | +-------------+--------------------------------------------------------+                         |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| name        | LLM Proxy profile name.           | string             | Maximum length: 35 |                    |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
| unknown-api | Support unknown API.              | option             | \-                 | disable            |
+-------------+-----------------------------------+--------------------+--------------------+--------------------+
|             | +-------------+--------------------------------------------------------+                         |
|             | | Option      | Description                                            |                         |
|             | +=============+========================================================+                         |
|             | | *enable*    | Enable unknown API.                                    |                         |
|             | +-------------+--------------------------------------------------------+                         |
|             | | *disable*   | Disable unknown API.                                   |                         |
|             | +-------------+--------------------------------------------------------+                         |
+-------------+--------------------------------------------------------------------------------------------------+

