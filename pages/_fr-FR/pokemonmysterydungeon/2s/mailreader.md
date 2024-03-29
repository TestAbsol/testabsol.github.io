---
title: Liseuse de Lettres Miracle S (PDM2C)
description: Liseuse de Lettres Miracle S (PDM2C)
---
# Pokémon Donjon Mystère : Explorateurs du Ciel
## Liseuse de Lettres Miracle S

Utilisez cet outil pour décrypter une Lettre Miracle S à partir de son mot de passe. Fonctionne pour les mots de passe européens et américains/australiens.

Source : [http://apointlessplace.net/wms/wmreader.html](https://web.archive.org/web/20170802182716/http://apointlessplace.net/wms/wmreader.html)

<script type="text/javascript" src="/assets/js/tools/PMD2S/wmutils.js"></script>
<script type="text/javascript" src="/assets/js/tools/PMD2S/wm.js"></script>
<script type="text/javascript" src="/assets/js/tools/PMD2S/sky_dungeon-fr.js"></script>
<script type="text/javascript" src="/assets/js/tools/PMD2S/sky_item-fr.js"></script>
<script type="text/javascript" src="/assets/js/tools/PMD2S/sky_poke-fr.js"></script>
<script type="text/javascript">
		// This is used in wm.js.
		function getOption(name) {
			switch(name) {
				default:
					return false;
				break;
			}
		}
		
		// Don't allow option setting on this page.
		function setOption(name, value) {
			return false;
		}
		
		function setError(text) {
			$('outputbox').value = text;
		}
		
		function doReadCode() {
			let mailString = WMSParser.sanitize($('inputbox').value);
			if(mailString.length != 34) {
				setError("La chaîne de caractères de la Lettre Miracle S semble invalide.");
				return false;
			}
			
			// Read and convert the string.
			let mailStringUser = prettyMailString(mailString, 2, 7);
			let descrambled = WMSParser.unscrambleString(mailString);
			let ebits = WMSParser.bytesToBits(descrambled);
			let dbits = WMSParser.decryptBitStream(ebits);
			let struct = WMSParser.bitsToStructure(dbits);
			
			let valid = false;
			let eu = false;
			// Does it validate?
			if(struct.checksum == WMSParser.calculateChecksum(dbits)) {
				valid = true;
			}
			else {
				// Try EU!
				descrambled = WMSParser.unscrambleString(mailString, WMSParser.byteSwapEU);
				ebits = WMSParser.bytesToBits(descrambled);
				dbits = WMSParser.decryptBitStream(ebits);
				struct = WMSParser.bitsToStructure(dbits);
				
				// Does it validate now?
				if(struct.checksum == WMSParser.calculateChecksum(dbits)) {
					valid = true;
					eu = true;
				}
			}
			
			if(!valid) {
				$('outputbox').value = "Ce code ne semble pas être valide.";
				return;
			}
			
			let output = "";
			
			// Validate some data.
			if(struct.mailType != 4) {
				setError("Désolé, ce mot de passe semble invalide. Je ne peux pas le lire.");
				return false;
			}
			
			/*
				Location: Beach Cave 1F
				Mission: Find Blue Gummi.
				Client: whoever
				Reward: Money + Whatever
				
				Wonder Mail S:
			*/
			
			// Build the Mission data (oh boy...).
			let missionName;
			let noClient = false;
			let noFloor = false;
			let noReward = false;
			switch(struct.missionType) {
				case 0: // Rescue client
					missionName = "Sauver " + getMonName(struct.client);
				break;
				
				case 1: // Rescue target
					missionName = "Sauver " + getMonName(struct.target);
				break;
				
				case 2: // Escort
					missionName = "Escorter " + getMonName(struct.client) + "jusqu'à " + getMonName(struct.target);
				break;
				
				case 3: // Explore
					switch(struct.missionSpecial) {
						case 1:
							missionName = "Explorer la Chambre Scellée avec " + getMonName(struct.client);
						break;
						
						case 2:
							missionName = "Explorer la Chambre Dorée avec " + getMonName(struct.client);
						break;
						
						case 3:
							missionName = "Explorer le nouveau donjon avec " + getMonName(struct.client);
						break;
						
						default:
							missionName = "Explorer avec " + getMonName(struct.client);
						break;
					}
				break;
				break;
				
				case 4: // Prospect
					missionName = "Prospecter l'objet " + getItemName(struct.targetItem) + " avec " + getMonName(struct.client);
				break;

				case 5: // Guide
					missionName = "Guider " + getMonName(struct.client);
				break;
				
				case 6: // Find item
					missionName = "Trouver " + getItemName(struct.targetItem);
				break;

				case 7: // Deliver item
					missionName = "Livrer " + getItemName(struct.targetItem);
				break;
				
				case 8: // Search
					missionName = "Chercher " + getMonName(struct.target ? struct.target : struct.client);
				break;

				case 9: // Outlaw - item
					missionName = "Prendre l'objet " + getItemName(struct.targetItem) + " à " + getMonName(struct.target);
					
					if(struct.missionSpecial == 1) {
						missionName += " (caché)";
					}
					else if(struct.missionSpecial == 2) {
						missionName += " (fuite)";
					}
				break;

				case 10: // Outlaw - kill
					missionName = "Arrêter " + getMonName(struct.target) + ".";
					
					if(struct.missionSpecial == 4) {
						missionName += " (Escorte de " + getMonName(struct.client) + ").";
					}
					else if(struct.missionSpecial == 5) {
						missionName += " (fuite)";
					}
					else if(struct.missionSpecial == 6) {
						missionName += " (Maison de monstres - étage spécial avec " + getMonName(struct.target) + " et " + getMonName(struct.target2) + ").";
					}
					else if(struct.missionSpecial == 7) {
						missionName += " (Maison de monstres).";
					}
				break;

				case 11: // Challenge
					// The fixed challenges 1-5 operate on client only. Challenge 0 operates on client and target/target2 (if nonzero).
					// target is preferred here, but target2 is checked anyway.
					if(struct.missionSpecial > 0 && struct.missionSpecial < 6) {
						missionName = "Battre " + getMonName(struct.client);
					}
					else if(struct.missionSpecial == 0 && (struct.target != 0 || struct.target2 != 0)) {
						let target = struct.target || struct.target2;
						missionName = "Battre " + getMonName(struct.client) + " et " + getMonName(target);
					}
					else {
						missionName = "Battre " + getMonName(struct.client);
					}
				break;
				
				case 12: // Treasure hunt
					missionName = "Trouver le trésor";
					noClient = true;
					noReward = true;
				break;
				
				case 14:
					missionName = "Débloquer un donjon des Sept Trésors";
					noFloor = true;
					noClient = true;
					noReward = true;
				break;

				default:
					missionName = "Type de mission inconnu " + struct.missionType + " (spécial = " + struct.missionSpecial + ")";
				break;
			}
			
			// Build the Client line.
			if(!noClient) {
				output += "Client : " + getMonName(struct.client) + "\n";
			}
			
			// Add the mission data.
			output += "Objectif : " + missionName + ".\n";
			
			// Build the location data, based on letiables in the mission data.
			let dungeon = getDungeonName(struct.dungeon);
			if(noFloor) {
				output += "Lieu : " + dungeon + "\n";
			}
			else {
				output += "Lieu : " + dungeon + " E. " + struct.floor + "\n";
			}
			
			// Build the Restrictions line.
			// multiple of 2: type restrict
			// non-multiple of 2: mon restrict
			if(struct.restriction == 0) {
				output += "Restriction : Aucune\n";
			}
			else if(struct.restrictionType == 1) {
				output += "Restriction : Avec " + (getMonName(struct.restriction)) + "\n";
			}
			else {
				let types = [
					0, "Normal", "Feu", "Eau", "Plante", "Electrik", "Glace", "Combat", "Poison",
					"Sol", "Vol", "Psy", "Insecte", "Roche", "Spectre", "Dragon", "Ténèbres", "Acier"
				];
				let restType = types[struct.restriction];
				if(!restType) {
					restType = "INCONNU";
				}
				output += "Restriction : Avec partenaire " + restType + "\n";
			}
			
			// Build the Reward line.
			if(!noReward) {
				let reward;
				switch(struct.rewardType) {
					case 0: // Money
						reward = "Argent";
					break;
					
					case 1: // Money + item
						reward = "Argent + " + getItemName(struct.reward);
					break;
					
					case 2: // Item
						reward = getItemName(struct.reward);
					break;

					case 3: // Item + Item
						reward = getItemName(struct.reward) + " + ??? (aléatoire)";
					break;

					case 4: // Random
						if(struct.reward) {
							reward = getItemName(struct.reward) + " + ??? (aléatoire)";
						}
						else {
							reward = "??? (aléatoire)";
						}
					break;

					case 5: // Egg
						reward = "Œuf";
					break;
					
					case 6: // Client joins
						reward = getMonName(struct.client) + " rejoint l'équipe";
					break;
					
					default:
						reward = "Type de récompense inconnu " + struct.rewardType;
					break;
				}
				output += "Récompense : " + reward + "\n";
			}
			
			// Add the code.
			output += "\nLettre Miracle S (" + (eu ? "EU" : "US/AU") + ") :\n" + mailStringUser;
			
			// Add warning
			if(struct.nullBits != 0)
				output = "ATTENTION ! Ce mot de passe n'a pas été correctement décrypté. Les données ci-dessous sont susceptibles d'être incorrectes.\n\n" + output;
			
			$('outputbox').value = output;
		}
</script>

<fieldset>
			<legend>Lettre Miracle S</legend>
			<textarea id="inputbox" rows="5" cols="30"></textarea>
</fieldset>
		
<input type="button" id="readBtn" value="Lire le mot de passe" onclick="doReadCode()" />
<fieldset>
			<legend>Données</legend>
			<textarea id="outputbox" rows="10" cols="30"></textarea>
</fieldset>