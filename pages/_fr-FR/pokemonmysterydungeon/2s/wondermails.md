---
title: Générateur de Lettres Miracle S (PDM2C)
description: Générateur de Lettres Miracle S (PDM2C)
---
# Pokémon Donjon Mystère : Explorateurs du Ciel
## Générateur de Lettres Miracle S
Utilisez cet outil pour générer une Lettre Miracle S.

Notez qu'il s'agit d'une version bêta et qu'elle le restera probablement pour toujours (en raison de certains mystères sérieux et du manque de temps pour faire des recherches). Pour cette raison, certains paramètres ne sont disponibles qu'avec le mode avancé, que vous pouvez activer [ici](https://testabsol.github.io/pokemonmysterydungeon/2s/wondermails?advanced=1).

Source : [http://apointlessplace.net/wms/wmgenerate.html](https://web.archive.org/web/20170912231300/http://apointlessplace.net/wms/wmgenerate.html)


<p id="advancedMode" style="display: none">
  <strong>Mode avancé activé</strong> : vous utilisez actuellement le mode avancé. Les donjons et les clients ne génèrent pas tous des mots de passe valides. Pour le désactiver, cliquez 
  <a href="https://testabsol.github.io/pokemonmysterydungeon/2s/wondermails">ici</a>.
</p>

<script type="text/javascript" src="/assets/js/tools/PMD2S/wmutils.js">
</script>
<script type="text/javascript" src="/assets/js/tools/PMD2S/wm.js">
</script>
<script type="text/javascript" src="/assets/js/tools/PMD2S/wmgenerate.js">
</script>
<script type="text/javascript" src="/assets/js/tools/PMD2S/sky_dungeon-fr.js">
</script>
<script type="text/javascript" src="/assets/js/tools/PMD2S/sky_item-fr.js">
</script>
<script type="text/javascript" src="/assets/js/tools/PMD2S/sky_poke-fr.js">
</script>
<script type="text/javascript">
  /**
		 * The purpose of this function is to properly initialize the generator.
		 * It will run on load by default unless the user is using IE6.
		 */
		function runInitialize() {
			WMSGen.advanced = (document.location.search.indexOf('advanced') != -1);
			WMSGen.setup($('genForm'));
		}
		
		// Run initialize by default.
		runOnLoad = runInitialize;
                window.onload = runOnLoad;
		
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
		
		var generatedThisSession = false;
		function doGenerate() {
			// Check for errors
			var errors = WMSGen.verify();
			if(errors.length == 0) {
				var code = WMSGen.generate();
				$('outputbox').value = code;
			}
			else {
				var errorStr = "";
				for(var i = 0; i < errors.length; ++i) {
					errorStr += " * " + errors[i] + "\n";
				}
				$('outputbox').value = errorStr;
			}
		}
</script>

<form id="genForm">
  <fieldset>
    <legend>Générer un mot de passe</legend>
    <p>
      <label for="missionTypeBox">Type de mission :
      </label>
      <select name="missionTypeBox" id="missionTypeBox" onchange="WMSGen.fillSubTypeList(); WMSGen.update()">
      </select>
      <span id="subType" style="display: none">
        <select name="missionSubTypeBox" id="missionSubTypeBox" onchange="WMSGen.update()">
        </select>
      </span>
    </p>
    <p>
      <label for="dungeonBox">Donjon :
      </label>
      <select id="dungeonBox" name="dungeonBox">
      </select>
    </p>
    <p>
      <label for="floor">Étage :
      </label>
      <input id="floor" name="floor" type="text" size="4" value="1">
    </p>
    <p>
      <label for="clientBox">Client :
      </label>
      <select name="clientBox" id="clientBox">
      </select>
      femelle : 
      <input type="checkbox" name="clientF" id="clientF" value="600"> (décocher pour mâle)
    </p>
    <p>
      <label for="targetBox">Cible :
      </label>
      <select name="targetBox" id="targetBox">
      </select>
      femelle : 
      <input type="checkbox" name="targetF" id="targetF" value="600" disabled=""> (décocher pour mâle)
    </p>
    <p id="target2">
      <label for="target2Box">Cible supplémentaire :
      </label>
      <select name="target2Box" id="target2Box">
      </select> femelle : 
      <input type="checkbox" name="target2F" id="target2F" value="600"> (décocher pour mâle)
    </p>
    <p>
      <label for="targetItemBox">Objet cible :
      </label>
      <select name="targetItemBox" id="targetItemBox">
      </select>
    </p>
    <p>
      <label for="rewardTypeBox">Type de récompense :
      </label>
      <select name="rewardTypeBox" id="rewardTypeBox" onchange="WMSGen.update()">
        <option value="0">Argent
        </option>
        <option value="1">Argent + ??? (Objet en récompense)
        </option>
        <option value="2">Objet
        </option>
        <option value="3" selected="selected">Objet + ??? (Aléatoire)
        </option>
        <option value="4">??? (Objet en récompense)
        </option>
        <option value="5">??? (Œuf)
        </option>
        <option value="6">??? (Recrutement du client)
        </option>
      </select>
    </p>
    <p>
      <label for="rewardItemBox">Objet en récompense :
      </label>
      <select name="rewardItemBox" id="rewardItemBox">
      </select>
    </p>
    <div id="advancedModeOnlyStuff" style="display: none">
      <p>
        <label for="flavorText">Type de texte :
        </label>
        <input id="flavorText" name="flavorText" type="text" value=""> (laisser vide pour l'automatique)
      </p>
      <p>
        <label for="specialFloor">Étage spécial :
        </label>
        <input id="specialFloor" name="specialFloor" type="text" value=""> (laisser vide pour l'automatique ; remplace même les étages spéciaux forcés !)
      </p>
    </div>
    <p>
      <label for="useEUswap">Version européenne :
      </label>
      <input type="checkbox" name="useEUswap" id="useEUswap" value="1"> (cocher pour générer un mot de passe pour la version européenne, décocher pour les versions américaine et australienne)
    </p>
    <p>
      <label for="generateBtn">Générer :
      </label>
      <input type="button" value="Générer" id="generateBtn" type="button" onclick="doGenerate(); return false" />
    </p>
  </fieldset>
</form>
<fieldset>
  <legend>Mot de passe généré</legend>
  <textarea id="outputbox" rows="3" cols="30" readonly="readonly">
  </textarea>
</fieldset>
