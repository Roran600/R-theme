---
title: " AMD Epyc oprava sata hotswapu "
date: 2024-12-08T16:29:21.722Z
draft: false
description: null
noindex: false
featured: true
pinned: false
series: null
categories:
    - Linux
    - Kernel
tags:
    - Linux
    - Sata
    - Hotswap
    - Kernel
images: 
---

Na serverových platformách AMD EPYC (Rome aj Milan) nefunguje hot-swap zo SATA v predvolenej konfigurácii na Ubuntu 22.04 LTS alebo Proxmox VE 7.x. Príčinou je nakonfigurovaná voľba jadra CONFIG_SATA_MOBILE_LPM_POLICY=3 v jadre Ubuntu, ktorá znižuje spotrebu energie mobilných zariadení. Zavádzacia voľba jadra ahci.mobile_lpm_policy=1 problém odstraňuje. Pri používaní systému Microsoft Windows (Server 2022, Server 2019, Windows 10) sa problémy s hot-swapom tiež nevyskytujú. 

<!--more-->

### Aktivácia funkcie SATA Hot-Swap     

Nasledujúce parametre zavádzania jadra umožňujú hot swap:
    • ahci.mobile_lpm_policy=0 
    • ahci.mobile_lpm_policy=1 
    • ahci.mobile_lpm_policy=2


### Základné informácie
Možnosti konfigurácie CONFIG_SATA_MOBILE_LPM_POLICY
Pri kompilácii jadra Linuxu je možné vybrať požadovanú štandardnú politiku SATA Link Power Management (LPM) pre čipové sady ("South Bridges") (CONFIG_SATA_MOBILE_LPM_POLICY). 
Na výber sú tieto poistné zmluvy:




| CONFIG_SATA_MOBILE_LPM_POLICY | Description                                     | ata_lpm_policy_names / ata_lpm_policy     |
| ----------------------------- | ----------------------------------------------- | ----------------------------------------- |
|                               |                                                 |                                           |
| 0                             | Keep firmware settings (Vanilla Kernel Default) | ATA_LPM_UNKNOWN                           |
| 1                             | Maximum performance                             | ATA_LPM_MAX_POWER                         |
| 2                             | Medium power                                    | ATA_LPM_MED_POWER                         |
| 3                             | Medium power with Device Initiated PM enabled   | ATA_LPM_MED_POWER_WITH_DIPM               |
|                               |                                                 | ATA_LPM_MIN_POWER_WITH_PARTIAL            |
| 4                             | Minimum power                                   | ATA_LPM_MIN_POWER                         |   


Poznámka: Je známe, že nastavenie "Minimálny výkon" spôsobuje problémy s niektorými diskami SSD/HDD, a preto by sa nemalo používať.

Jadro Ubuntu 22.04 5.15 je skompilované s voľbou CONFIG_SATA_MOBILE_LPM_POLICY=3. Toto nastavenie zakazuje nepoužívaný port počas procesu zavádzania systému. Šetrí to energiu a je to dôležité najmä pre mobilné zariadenia, pretože sa tým predlžuje doba prevádzky na batériu. S týmto nastavením však hot-swapping nefunguje pri serverových systémoch. V priebehu vývoja jadra Linux 5.19 sa uvažovalo o nastavení CONFIG_SATA_MOBILE_LPM_POLICY=3 všeobecne ako predvolenej hodnoty. Vzhľadom na problémy s hot-plugom sa od toho upustilo.   

### Príklady problémov s hot-swapom SATA 

Nasledujúce príklady boli vykonané s nasledujúcim nastavením vzorky: 
    • Základná doska Supermicro H12SSL-NT (hardvérová revízia 1.01 aj 1.02) 
    • BIOS verzie 2.3 a 2.4 
    • Šasi SC825TQC-R802LPB 
    • Základná doska BPN-SAS3-825TQ (problém možno reprodukovať aj bez základnej dosky) 
    • Disk SATA priamo pripojený k základnej doske pomocou kábla Slim-SAS (pri použití Microsemi Adaptec HBA 1000-8i nie je problém s hot-swapom)

Problémy s how-swapom sa vyskytujú len na systémoch AMD EPYC s predvolenou konfiguráciou Ubuntu 22.04 (bez možnosti zavádzania jadra ahci.mobile_lpm_policy=1). 
Pri teste so základnou doskou Supermicro X12DPi-N6 s procesormi Intel Xeon Scalable tretej generácie sa v predvolenej konfigurácii Ubuntu 22.04 nevyskytli žiadne problémy. 
Test pridania za horúca
Pri pripojení disku SATA sa nový disk automaticky nerozpozná. 
Skúška odstránenia za tepla
Odstránenie disku SATA počas jeho prevádzky (hot-removal) nie je spočiatku rozpoznané jadrom Ubuntu. 
Chybové hlásenia sa zobrazia len pri pokuse o čítanie alebo zápis na dotknutý disk: 