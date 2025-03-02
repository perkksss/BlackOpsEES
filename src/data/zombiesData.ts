import { Game } from '../types';

export const games: Game[] = [
  {
    id: 'bo1',
    name: 'Black Ops 1',
    maps: [
      {
        id: 'bo1-kino',
        name: 'Kino der Toten',
        imageUrl: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Find and activate all 3 meteor rocks',
            description: 'Kino der Toten does not have a main Easter Egg quest, but it does have a musical Easter Egg.',
            substeps: [
              'First meteor: In the lobby, on the couch to the right when facing the door to the theater.',
              'Second meteor: In the dressing room, on a chair in the corner.',
              'Third meteor: In the alleyway, on a pile of garbage near the door.'
            ],
            tips: 'Activating all three will play the song "115" by Elena Siegman.'
          }
        ]
      },
      {
        id: 'bo1-five',
        name: 'Five',
        imageUrl: 'https://images.unsplash.com/photo-1607427293702-036707c99c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Activate the Pentagon Thief',
            description: 'Five does not have a main Easter Egg quest, but it has the Pentagon Thief special round.',
            substeps: [
              'Survive until round 6 or later when the Pentagon Thief will spawn.',
              'If you kill him before he steals any weapons, all players will receive a Max Ammo and a Bonfire Sale power-up.'
            ],
            tips: 'The Bonfire Sale reduces the cost of the Pack-a-Punch machine to 1000 points.'
          }
        ]
      },
      {
        id: 'bo1-ascension',
        name: 'Ascension',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Casimir Mechanism',
            description: 'This is the first major Easter Egg in Zombies history, requiring 4 players to complete.',
            substeps: [
              'Step 1: Free Gersh by launching all 3 lunar landers and activating the buttons at each landing site.',
              'Step 2: Find and throw a Gersh Device near the power generator.',
              'Step 3: Throw a Matryoshka Doll into the Gersh portal.',
              'Step 4: Knife the floating Gersh portal.',
              'Step 5: Use a Zeus Cannon (upgraded Thunder Gun) to shoot the Gersh portal.',
              'Step 6: Have all players stand on the pressure plates near the lunar landers simultaneously.'
            ],
            tips: 'Completing this Easter Egg will give all players a Death Machine for 90 seconds.'
          }
        ]
      },
      {
        id: 'bo1-cotd',
        name: 'Call of the Dead',
        imageUrl: 'https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Original Characters Trapped',
            description: 'Help the original characters (Richtofen, Dempsey, Nikolai, and Takeo) escape.',
            substeps: [
              'Step 1: Obtain the Vril Generator by killing a zombie near the locked door in the lighthouse.',
              'Step 2: Complete the fuse puzzle in the lighthouse by turning the dials to the correct positions.',
              'Step 3: Obtain the golden rod by shooting the meteorite with the V-R11 and the Scavenger.',
              'Step 4: Deliver the Vril Generator and golden rod to the original characters.'
            ],
            tips: 'Completing this Easter Egg will give all players a Wunderwaffe DG-2 that doesn\'t take up a weapon slot.'
          }
        ]
      },
      {
        id: 'bo1-shangri-la',
        name: 'Shangri-La',
        imageUrl: 'https://images.unsplash.com/photo-1518623001395-125242310d0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Eclipse',
            description: 'Help Brock and Gary escape their time loop.',
            substeps: [
              'Step 1: Activate the Eclipse by having all 4 players stand on the four stones around the Pack-a-Punch machine.',
              'Step 2: Complete the tile puzzle by stepping on the correct tiles in sequence.',
              'Step 3: Complete the water slide puzzle by having players catch the gems in the correct order.',
              'Step 4: Solve the Morse code puzzle at the radio near the waterfall.',
              'Step 5: Escort the time-traveling explorers to the Pack-a-Punch machine.',
              'Step 6: Defeat the Napalm Zombies and retrieve the focusing stone.'
            ],
            tips: 'This Easter Egg requires exactly 4 players and precise coordination.'
          }
        ]
      },
      {
        id: 'bo1-moon',
        name: 'Moon',
        imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Richtofen\'s Grand Scheme',
            description: 'Help Richtofen complete his plan to control the zombies.',
            substeps: [
              'Step 1: Hack all three panels around the map to release Samantha.',
              'Step 2: Obtain the Vril Generator and golden rod from previous Easter Eggs.',
              'Step 3: Use the QEDs and Gersh Devices to charge the pyramid.',
              'Step 4: Have Richtofen swap souls with Samantha by interacting with the pyramid.',
              'Step 5: Launch three missiles to Earth by activating the computer terminal.',
              'Step 6: Watch as Earth is destroyed.'
            ],
            tips: 'This Easter Egg has two paths: Richtofen\'s side (destroy Earth) or Maxis\' side (preserve Earth).'
          }
        ]
      }
    ]
  },
  {
    id: 'bo2',
    name: 'Black Ops 2',
    maps: [
      {
        id: 'bo2-tranzit',
        name: 'TranZit',
        imageUrl: 'https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Tower of Babble',
            description: 'This Easter Egg has two paths: Maxis\' side or Richtofen\'s side.',
            substeps: [
              'Step 1: Build the Turbine, Zombie Shield, and Power Switch parts.',
              'Step 2: Turn on the power at the power station.',
              'Step 3: For Maxis: Disable the power and place a Turbine at each tower.',
              'Step 4: For Richtofen: Keep the power on and use EMPs on each tower.',
              'Step 5: Build the Jet Gun and use it at the final tower.',
              'Step 6: Have all players throw EMPs at the final tower simultaneously.'
            ],
            tips: 'This Easter Egg requires at least 4 players and good coordination with the bus timing.'
          }
        ]
      },
      {
        id: 'bo2-nuketown',
        name: 'Nuketown Zombies',
        imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Musical Easter Egg',
            description: 'Nuketown Zombies does not have a main Easter Egg quest, but it has a musical Easter Egg.',
            substeps: [
              'Find and shoot all the mannequin heads around the map.',
              'After shooting all heads, the song "Samantha\'s Lullaby" will play.'
            ],
            tips: 'The mannequin heads will respawn after a certain time, so you need to shoot them all quickly.'
          }
        ]
      },
      {
        id: 'bo2-die-rise',
        name: 'Die Rise',
        imageUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'High Maintenance',
            description: 'Another Easter Egg with two paths: Maxis or Richtofen.',
            substeps: [
              'Step 1: Build the Navcard Table and the Trample Steam.',
              'Step 2: Have all players place their Trample Steams at specific locations.',
              'Step 3: For Maxis: Have a player jump from the roof to bounce on all Trample Steams.',
              'Step 4: For Richtofen: Have all players use the Trample Steams to launch zombies at the radio.',
              'Step 5: Interact with the dragon symbol on the floor.',
              'Step 6: Complete the Mahjong puzzle by matching the correct tiles.'
            ],
            tips: 'The Mahjong puzzle is randomized each game, so communication is key.'
          }
        ]
      },
      {
        id: 'bo2-mob-of-the-dead',
        name: 'Mob of the Dead',
        imageUrl: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Pop Goes the Weasel',
            description: 'Break the cycle or continue it.',
            substeps: [
              'Step 1: Build the plane by collecting all parts around Alcatraz.',
              'Step 2: Fuel the plane with gas cans.',
              'Step 3: Fly to the Golden Gate Bridge and collect the Hell\'s Retriever.',
              'Step 4: Enter the numbers in the correct sequence at the number pads.',
              'Step 5: Have Weasel (Albert Arlington) and the other three mobsters fight each other.',
              'Step 6: If Weasel kills all three, the cycle is broken. If the three kill Weasel, the cycle continues.'
            ],
            tips: 'This Easter Egg has two endings depending on who wins the final confrontation.'
          }
        ]
      },
      {
        id: 'bo2-buried',
        name: 'Buried',
        imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Mined Games',
            description: 'The final Easter Egg with Maxis or Richtofen paths.',
            substeps: [
              'Step 1: Build all buildables including the Navcard Table.',
              'Step 2: Insert the correct Navcards into the table.',
              'Step 3: For Maxis: Have a player use the Paralyzer to float up to the fountain.',
              'Step 4: For Richtofen: Have a player use Vulture Aid to follow the wisp to the correct locations.',
              'Step 5: Complete the target shooting puzzle in the correct order.',
              'Step 6: For the final step, either help Maxis gain control or help Richtofen maintain control.'
            ],
            tips: 'This Easter Egg determines the canonical ending of the Black Ops 2 Zombies storyline.'
          }
        ]
      },
      {
        id: 'bo2-origins',
        name: 'Origins',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Little Lost Girl',
            description: 'Free Samantha from Agartha.',
            substeps: [
              'Step 1: Build all four Elemental Staffs (Fire, Ice, Wind, Lightning).',
              'Step 2: Upgrade all four staffs to their ultimate versions.',
              'Step 3: Place the staffs in the correct pedestals during specific rounds.',
              'Step 4: Solve the puzzle in the Crazy Place by matching the symbols.',
              'Step 5: Activate all six 115 generators around the map.',
              'Step 6: Defeat the Templar Zombies and collect the elemental gems.',
              'Step 7: Release Samantha by having all players shoot the floating orb simultaneously.'
            ],
            tips: 'This is one of the most complex Easter Eggs and sets up the storyline for Black Ops 3.'
          }
        ]
      }
    ]
  },
  {
    id: 'bo3',
    name: 'Black Ops 3',
    maps: [
      {
        id: 'bo3-shadows-of-evil',
        name: 'Shadows of Evil',
        imageUrl: 'https://images.unsplash.com/photo-1555661530-68c8e98db4e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Apocalypse Averted',
            description: 'Prevent the Apothicon invasion of Morg City.',
            substeps: [
              'Step 1: Complete all 4 character rituals to obtain the Summoning Key.',
              'Step 2: Collect all Gateworms by completing the rituals in each district.',
              'Step 3: Upgrade the Swords to Archon Swords by completing challenges in the Rift.',
              'Step 4: Summon and defeat the Apothicon boss in the Rift area.',
              'Step 5: Have all 4 players shock the Keepers at the same time in each district.',
              'Step 6: Defeat the Shadow Man in the final boss fight.',
              'Step 7: Place the Summoning Key on the pedestal to complete the Easter Egg.'
            ],
            tips: 'This Easter Egg requires exactly 4 players and cannot be completed solo or with fewer players.'
          }
        ]
      },
      {
        id: 'bo3-the-giant',
        name: 'The Giant',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Fly Trap',
            description: 'The Giant does not have a main Easter Egg quest, but it has the Fly Trap Easter Egg.',
            substeps: [
              'Step 1: Use a Pack-a-Punched weapon to shoot the hidden teddy bear near the furnace.',
              'Step 2: Find and shoot all 3 hidden teddy bears around the map.',
              'Step 3: Collect the Annihilator weapon as a reward.'
            ],
            tips: 'This is a remake of the original Der Riese Fly Trap Easter Egg from World at War.'
          }
        ]
      },
      {
        id: 'bo3-der-eisendrache',
        name: 'Der Eisendrache',
        imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'My Brother\'s Keeper',
            description: 'Help Richtofen secure a better tomorrow.',
            substeps: [
              'Step 1: Build all 4 Elemental Bows (Fire, Void, Wolf, Storm).',
              'Step 2: Feed the 3 Dragon Heads and collect the Ragnarok DG-4.',
              'Step 3: Activate the Death Ray and collect the Plunger weapon.',
              'Step 4: Complete the Simon Says computer game correctly.',
              'Step 5: Shoot the orbs in the correct order during the anti-gravity sequence.',
              'Step 6: Teleport to the moon and back to collect the MPD.',
              'Step 7: Defeat the Keeper boss in the final boss fight.',
              'Step 8: Witness Dempsey 1.0\'s death and collect his soul.'
            ],
            tips: 'This Easter Egg can be completed solo, but some steps are easier with multiple players.'
          }
        ]
      },
      {
        id: 'bo3-zetsubou-no-shima',
        name: 'Zetsubou No Shima',
        imageUrl: 'https://images.unsplash.com/photo-1596392927852-2a18c336fb78?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Seeds of Doubt',
            description: 'Secure Takeo 1.0\'s soul for the Summoning Key.',
            substeps: [
              'Step 1: Power up the lab by activating all 3 power generators.',
              'Step 2: Water all 3 underwater plants with different colored water.',
              'Step 3: Build the KT-4 wonder weapon and upgrade it to the Masamune.',
              'Step 4: Defeat the giant spider boss and collect its web.',
              'Step 5: Complete the zipline challenge by shooting the correct cogs.',
              'Step 6: Drain the water from the lab and access the secret room.',
              'Step 7: Defeat the Thrasher boss and free Takeo 1.0.',
              'Step 8: Witness Takeo 1.0\'s seppuku and collect his soul.'
            ],
            tips: 'Managing the plant watering system is crucial for this Easter Egg.'
          }
        ]
      },
      {
        id: 'bo3-gorod-krovi',
        name: 'Gorod Krovi',
        imageUrl: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Love and War',
            description: 'Secure Nikolai 1.0\'s soul for the Summoning Key.',
            substeps: [
              'Step 1: Activate the Dragon Network Controller by finding the code cylinders.',
              'Step 2: Escort the drone through the map without it being destroyed.',
              'Step 3: Complete all 6 Sophia challenges around the map.',
              'Step 4: Defeat the Dragon boss and collect its scales.',
              'Step 5: Solve the Valkyrie Drone escort challenge.',
              'Step 6: Defeat the Mangler and collect its helmet.',
              'Step 7: Complete the bomb defusal challenge in the correct order.',
              'Step 8: Defeat Nikolai 1.0 in his mech suit.',
              'Step 9: Witness Nikolai 1.0\'s death and collect his soul.'
            ],
            tips: 'The bomb defusal challenge is timed and requires quick memorization of the bomb locations.'
          }
        ]
      },
      {
        id: 'bo3-revelations',
        name: 'Revelations',
        imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'For The Good Of All',
            description: 'The final battle against the Shadow Man and Dr. Monty\'s revelation.',
            substeps: [
              'Step 1: Collect all 4 Keeper protector parts around the map.',
              'Step 2: Upgrade the Apothicon Servant by shooting specific rocks.',
              'Step 3: Complete the reel collection puzzle in Kino der Toten area.',
              'Step 4: Shoot the gravestones in the correct order in the Nacht der Untoten area.',
              'Step 5: Collect the Kronorium book and the Summoning Key.',
              'Step 6: Defeat the Shadow Man in the final boss fight.',
              'Step 7: Place all the souls in the Summoning Key to complete the cycle.',
              'Step 8: Witness Dr. Monty\'s revelation about the cycle of the universe.'
            ],
            tips: 'This Easter Egg concludes the Black Ops 3 Zombies storyline and sets up Black Ops 4.'
          }
        ]
      }
    ]
  },
  {
    id: 'bo4',
    name: 'Black Ops 4',
    maps: [
      {
        id: 'bo4-voyage-of-despair',
        name: 'Voyage of Despair',
        imageUrl: 'https://images.unsplash.com/photo-1527100673774-cce25eafaf7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Trial of Poseidon',
            description: 'Recover the Sentinel Artifact from the sinking Titanic.',
            substeps: [
              'Step 1: Activate the Pack-a-Punch machine by turning on all 4 elemental perk statues.',
              'Step 2: Collect the 4 elemental Kraken variants (Fire, Ice, Lightning, Poison).',
              'Step 3: Solve the planet alignment puzzle in the Cargo Hold.',
              'Step 4: Complete the clock puzzle by shooting the correct clock hands.',
              'Step 5: Activate all 4 elemental circles around the map.',
              'Step 6: Defeat the Eye of Odin boss in the final boss fight.',
              'Step 7: Collect the Sentinel Artifact from the pedestal.'
            ],
            tips: 'The clock puzzle requires precise timing and coordination between players.'
          }
        ]
      },
      {
        id: 'bo4-ix',
        name: 'IX',
        imageUrl: 'https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Trial of Ra',
            description: 'Uncover the secrets of the ancient arena and escape.',
            substeps: [
              'Step 1: Activate the Pack-a-Punch by lighting all 4 towers.',
              'Step 2: Complete all 9 challenges given by the crowd affinity system.',
              'Step 3: Collect the Death of Orion wonder weapon from the Mystery Box.',
              'Step 4: Solve the skull puzzle in the underground area.',
              'Step 5: Activate all 4 god statues around the arena.',
              'Step 6: Complete the Ra obelisk puzzle by shooting the correct symbols.',
              'Step 7: Defeat the elephant boss in the arena.',
              'Step 8: Collect the Sentinel Artifact from the pedestal.'
            ],
            tips: 'Maintaining high crowd affinity is important for completing this Easter Egg efficiently.'
          }
        ]
      },
      {
        id: 'bo4-blood-of-the-dead',
        name: 'Blood of the Dead',
        imageUrl: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Most Escape Alive',
            description: 'Break the cycle and escape Alcatraz.',
            substeps: [
              'Step 1: Build the Spectral Shield and upgrade it.',
              'Step 2: Collect the Hell\'s Retriever and upgrade it to Hell\'s Redeemer.',
              'Step 3: Find and free the ghost of Alfred "Weasel" Arlington.',
              'Step 4: Complete the bird feeding ritual at 3 locations.',
              'Step 5: Collect the Kronorium and read its pages.',
              'Step 6: Complete the challenges given by the Warden.',
              'Step 7: Defeat the Warden in the final boss fight.',
              'Step 8: Witness Richtofen\'s sacrifice to save the others.'
            ],
            tips: 'This Easter Egg has one of the most emotional endings in Zombies history.'
          }
        ]
      },
      {
        id: 'bo4-classified',
        name: 'Classified',
        imageUrl: 'https://images.unsplash.com/photo-1607427293702-036707c99c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Project Skadi',
            description: 'Survive 150 rounds to unlock the secret cutscene.',
            substeps: [
              'Step 1: Reach round 150.',
              'Step 2: Witness the secret cutscene showing Ultimis Richtofen, Dempsey, Nikolai, and Takeo being rescued by Primis Nikolai.'
            ],
            tips: 'This is the simplest but most time-consuming Easter Egg in Zombies history, requiring approximately 12+ hours of continuous play.'
          }
        ]
      },
      {
        id: 'bo4-dead-of-the-night',
        name: 'Dead of the Night',
        imageUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Alistair\'s Folly',
            description: 'Help the celebrity guests survive the night and defeat the vampires.',
            substeps: [
              'Step 1: Build the Alistair\'s Folly wonder weapon and upgrade it.',
              'Step 2: Collect all 4 elemental crystals around the mansion.',
              'Step 3: Activate the 4 sentinel artifacts in the correct order.',
              'Step 4: Complete the greenhouse puzzle by aligning the planets.',
              'Step 5: Solve the clock puzzle in the library.',
              'Step 6: Defeat the Werewolf boss in the forest.',
              'Step 7: Collect the Prima Materia and place it on the pedestal.',
              'Step 8: Defeat the vampire boss in the final boss fight.'
            ],
            tips: 'This Easter Egg has many intricate steps and requires good knowledge of the map layout.'
          }
        ]
      },
      {
        id: 'bo4-ancient-evil',
        name: 'Ancient Evil',
        imageUrl: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Wrath of Perseus',
            description: 'Defeat Perseus and escape the underground city.',
            substeps: [
              'Step 1: Collect all 4 Hands of the Gods (Charon, Hemera, Gaia, Ouranos).',
              'Step 2: Upgrade all 4 Hands to their special variants.',
              'Step 3: Complete the Apollo\'s Temple puzzle by activating the correct statues.',
              'Step 4: Solve the sundial puzzle in the market district.',
              'Step 5: Collect the Pegasus feather from the statue.',
              'Step 6: Defeat the 4 elemental zombies and collect their essence.',
              'Step 7: Defeat Perseus in the final boss fight.',
              'Step 8: Escape the collapsing city through the portal.'
            ],
            tips: 'Each Hand of the Gods has unique abilities that are useful for different parts of the Easter Egg.'
          }
        ]
      },
      {
        id: 'bo4-alpha-omega',
        name: 'Alpha Omega',
        imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'A New Mission',
            description: 'Help Nikolai execute his grand plan.',
            substeps: [
              'Step 1: Activate the Pack-a-Punch by powering up all generators.',
              'Step 2: Build the Elemental Ray Guns (Fire, Ice, Lightning, Poison).',
              'Step 3: Collect all 4 elemental orbs from around the bunker.',
              'Step 4: Complete the ventilation system puzzle.',
              'Step 5: Solve the code input puzzle at the APD.',
              'Step 6: Activate all 4 televisions around the map.',
              'Step 7: Defeat the Avogadro boss in the final boss fight.',
              'Step 8: Witness Nikolai\'s revelation about his plan.'
            ],
            tips: 'The code input puzzle requires finding specific codes scattered around the map.'
          }
        ]
      },
      {
        id: 'bo4-tag-der-toten',
        name: 'Tag Der Toten',
        imageUrl: 'https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'End of the Line',
            description: 'The final chapter of the Aether storyline.',
            substeps: [
              'Step 1: Build the Wunderwaffe DG-2 by collecting all parts.',
              'Step 2: Collect the Elemental Shard from the iceberg.',
              'Step 3: Complete the lighthouse puzzle by activating the correct beams.',
              'Step 4: Solve the code puzzle in the facility.',
              'Step 5: Defeat the ice zombies and collect their essence.',
              'Step 6: Activate the Agarthan Device by placing all artifacts.',
              'Step 7: Defeat the final boss in the lighthouse.',
              'Step 8: Witness the end of the Aether storyline as Nikolai poisons everyone and the universe is reset.'
            ],
            tips: 'This is the final Easter Egg of the Aether storyline that began in World at War.'
          }
        ]
      }
    ]
  },
  {
    id: 'bocw',
    name: 'Black Ops Cold War',
    maps: [
      {
        id: 'bocw-die-maschine',
        name: 'Die Maschine',
        imageUrl: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Reunion',
            description: 'Shut down the Dark Aether portal and stop the outbreak.',
            substeps: [
              'Step 1: Turn on the power by activating both terminals.',
              'Step 2: Build the D.I.E. Shockwave wonder weapon.',
              'Step 3: Upgrade the D.I.E. to one of its 4 elemental variants.',
              'Step 4: Collect the diary from the ghost in the Particle Accelerator room.',
              'Step 5: Shoot the floating anomalies around the map.',
              'Step 6: Build the Aetherscope and use it to see into the Dark Aether.',
              'Step 7: Collect the decontamination agent from the crashed plane.',
              'Step 8: Defeat the Megaton boss and extract its essence.',
              'Step 9: Shut down the particle accelerator and exfil.'
            ],
            tips: 'This Easter Egg is designed to be more accessible than previous ones and can be completed solo.'
          }
        ]
      },
      {
        id: 'bocw-firebase-z',
        name: 'Firebase Z',
        imageUrl: 'https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Maxis Extraction',
            description: 'Rescue Samantha Maxis from the Dark Aether.',
            substeps: [
              'Step 1: Turn on the power by activating all 3 aether reactors.',
              'Step 2: Collect the Rai K-84 wonder weapon from the trials or mystery box.',
              'Step 3: Collect the 3 parts for the Essence Trap.',
              'Step 4: Capture 3 different Mimics using the Essence Trap.',
              'Step 5: Collect the key card from the Mangler zombie.',
              'Step 6: Activate the computer terminal in the weapons lab.',
              'Step 7: Escort the payload to the teleporter.',
              'Step 8: Defeat Orda in the final boss fight.',
              'Step 9: Rescue Samantha Maxis from the Dark Aether.'
            ],
            tips: 'Capturing the correct Mimics can be tricky; look for ones that spawn from fake loot items.'
          }
        ]
      },
      {
        id: 'bocw-outbreak',
        name: 'Outbreak',
        imageUrl: 'https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Ravenov Implications',
            description: 'The first Outbreak Easter Egg.',
            substeps: [
              'Step 1: Reach World Tier 3 and complete the main objective.',
              'Step 2: Find the mysterious radio transmitting coordinates.',
              'Step 3: Travel to the coordinates and collect the listening device.',
              'Step 4: Deploy the listening device at 3 radio towers.',
              'Step 5: Collect the beacon device from the crashed satellite.',
              'Step 6: Travel to the silo entrance and use the beacon.',
              'Step 7: Complete the silo puzzle by activating the correct terminals.',
              'Step 8: Defeat the Legion boss in the final boss fight.',
              'Step 9: Exfil before the missile launches.'
            ],
            tips: 'The Legion boss fight is extremely difficult and requires high-damage weapons.'
          }
        ]
      },
      {
        id: 'bocw-mauer-der-toten',
        name: 'Mauer Der Toten',
        imageUrl: 'https://images.unsplash.com/photo-1552560880-2482cef14240?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Operatsiya Inversiya',
            description: 'Stop Omega Group\'s plans in East Berlin.',
            substeps: [
              'Step 1: Turn on the power by linking the 3 substations.',
              'Step 2: Build the Klaus robot by collecting all parts.',
              'Step 3: Upgrade Klaus by completing the 3 upgrade tasks.',
              'Step 4: Collect the CRBR-S wonder weapon from trials or the mystery box.',
              'Step 5: Use Klaus to access the secret room in the garment factory.',
              'Step 6: Collect the 3 uranium rocks from around the map.',
              'Step 7: Activate the 3 terminals in the correct sequence.',
              'Step 8: Defeat Valentina in the final boss fight.',
              'Step 9: Witness the revelation about Samantha Maxis\'s powers.'
            ],
            tips: 'Upgraded Klaus is essential for the boss fight as he can distract Valentina.'
          }
        ]
      },
      {
        id: 'bocw-forsaken',
        name: 'Forsaken',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Forsaken Conclusion',
            description: 'The final chapter of the Dark Aether storyline in Cold War.',
            substeps: [
              'Step 1: Turn on the power by activating the main terminal.',
              'Step 2: Collect the Chrysalax wonder weapon from trials or the mystery box.',
              'Step 3: Build the neutralizer by collecting all parts.',
              'Step 4: Activate the 4 Aether Crystals around the map.',
              'Step 5: Complete the arcade game puzzle to get the access code.',
              'Step 6: Enter the bunker using the access code.',
              'Step 7: Escort the Forsaken to the containment chamber.',
              'Step 8: Defeat the Forsaken in the final boss fight.',
              'Step 9: Witness the capture of the Forsaken and Eddie\'s transformation into Director Peck.'
            ],
            tips: 'The Chrysalax is extremely powerful against the Forsaken, especially in its axe form.'
          }
        ]
      }
    ]
  },
  {
    id: 'bo6',
    name: 'Black Ops 6',
    maps: [
      {
        id: 'bo6-terminus',
        name: 'Terminus',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Liberty Falls',
            description: 'Uncover the secrets of Terminus and the Dark Aether incursion.',
            substeps: [
              'Step 1: Turn on the power by activating all 3 generators.',
              'Step 2: Build the Wunderwaffe DG-3 by collecting all parts.',
              'Step 3: Activate the 4 Aether Rifts around the map.',
              'Step 4: Complete the computer terminal puzzle in the lab.',
              'Step 5: Collect the 3 Aetherium crystals from special zombies.',
              'Step 6: Activate the containment field in the central chamber.',
              'Step 7: Defeat the Terminus Overlord in the final boss fight.',
              'Step 8: Escape through the portal before the facility self-destructs.'
            ],
            tips: 'The Wunderwaffe DG-3 can chain lightning between multiple enemies, making it effective against groups.'
          }
        ]
      },
      {
        id: 'bo6-liberty-falls',
        name: 'Liberty Falls',
        imageUrl: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Small Town Nightmare',
            description: 'Save the town of Liberty Falls from the Dark Aether invasion.',
            substeps: [
              'Step 1: Restore power to the town by activating the 3 power stations.',
              'Step 2: Collect the Parasite Purger wonder weapon from the police station.',
              'Step 3: Complete the 3 ritual sites around the town.',
              'Step 4: Collect the town mayor\'s keycard from the town hall.',
              'Step 5: Access the underground bunker beneath the town square.',
              'Step 6: Activate the 4 containment pillars in the correct sequence.',
              'Step 7: Defeat the Harbinger boss in the final boss fight.',
              'Step 8: Close the main portal and save the remaining townspeople.'
            ],
            tips: 'The Parasite Purger is especially effective against the parasitic enemies that spawn during the Easter Egg steps.'
          }
        ]
      },
      {
        id: 'bo6-area-99',
        name: 'Area 99',
        imageUrl: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        easterEggSteps: [
          {
            title: 'Classified Containment',
            description: 'Prevent the Dark Aether specimens from escaping the facility.',
            substeps: [
              'Step 1: Restore facility power by activating the main generator.',
              'Step 2: Collect the Quantum Splitter wonder weapon from the labs.',
              'Step 3: Access the 3 containment zones by finding the security cards.',
              'Step 4: Recapture the 4 escaped specimens using the containment devices.',
              'Step 5: Decode the classified documents in the research center.',
              'Step 6: Activate the facility lockdown protocol.',
              'Step 7: Defeat the Amalgamation boss in the final boss fight.',
              'Step 8: Escape via helicopter before the facility self-destructs.'
            ],
            tips: 'The Quantum Splitter can create dimensional rifts that slow down zombies, useful for completing objectives.'
          }
        ]
      }
    ]
  }
];
</boltAction type="file">