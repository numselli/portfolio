---
title: 'Gen 2 Prius (2003-2009) brake light modification and fix'
date: 2024-05-13
description: 'A guide on adding a improving the brake lights on a 2004-2009 prius..'
---


# Notes: 
- This guide goes over modifying the cars' signaling devices in a way that may not be street-legal in your area, please check your local laws before attempting this modification.
- This is the way it was for me and it might be different for you, double-check the wiring diagrams, voltages, and polarity before making changes. 
- I take no responsibility for damaged property or violated laws, do this at your own risk.  

# The issue:
My left brake light had intermittent issues, sometimes it would work at full brightness, sometimes dimly, and sometimes not at all. This is a [known issue](https://priuschat.com/threads/brake-lights-not-working-04-prius.84974/) in this generation of the Prius (gen 2). Toyota decided to make the brake light nonuser replaceable and the only way to replace the brake light is by replacing the entire assembly. Replacement assemblies cost CAD $280 each and they have the same issue. It's not a price I want to pay to have the issue again in a few years.

#The idea:
I had an idea to change the turn signal into a brake light and a turn signal, if Teslas and other modern cars can do it why can't I? Later that day I found [this video](https://youtube.com/watch?v=eeXID7LI9B4) that demos the idea that I had.

The parts outlined in the video:
- Sylvania Red 7443R Lamps
    - Used to turn the turn signals red for legal compliance reasons
    - Needs some modification to fit in the turn signal socket
- Phillips LED adapter CANbus 21w
    - Used to prevent hyper flash
- Hopkins 48845 12” Tail Light Converter
    - Combines turn and stop signals into one lamp

# Making it work:
Note: Before I started working on making these changes I checked my local laws and verified that it would be compliant.
I pulled out the trunk side walls to get better access to the wiring for the light assemblies.

I then probed the car side of the stock lights to get the following pinout:
- Left turn + yellow
- stop + blue
- Right turn + green

I spliced these wires on the car side and used them as inputs to the trailer tail light converter. After that, I connected the corresponding outputs from the converter to the lights. 
I connected the input ground to the chassis of the car. I left the running light and output ground unused. I double-sided taped the tail light converter up in the rear quarter panel, close to where the trunk seal is. 

# Image gallery
An image gallery of the reference and progress photos I took can be found [here](https://photos.numselli.xyz/share/6vlwNKLXYMr1NsRBGlZShn4xBEB8BNLyXSHZ0_sKooDnEH-o688Zt0pmSiEbcmdCNlA).

# In the end:
It works as I would expect it to, with no issues since. It does have hyper flash because I skipped on the Phillips LED adapter. I can easily fix it with a relay that is meant for LEDs, I am not sure if I will do that though.
The total cost was about CAD $80 and about 4 hours. With replacement bulbs being CAD $30 for a set of two I think this mod is a better deal than buying a replacement housing for it.
