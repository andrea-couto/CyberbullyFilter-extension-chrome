// Sends request to background.js for localStorage
chrome.extension.sendRequest({method: "getLocalStorage"}, function(response) {
	var storage = response.data;
	for (i in storage){
		// Actual word replacement
		document.body.innerHTML = document.body.innerHTML.replace(new RegExp(i, "g"), storage[i]);
	}
});

// Inspired by http://is.gd/mwZp7E
// and https://github.com/panicsteve/cloud-to-butt

walk(document.body);

function walk(node) 
{
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var str = textNode.nodeValue;

	// Words
	str = str.replace(/\bass/g, " ");
	str = str.replace(/bastard/g, " ");
	str = str.replace(/bitch/g, " ");
	str = str.replace(/boner/g, " ");
	str = str.replace(/fuck/g, " ");
	str = str.replace(/shit/g, " ");
	str = str.replace(/chesticle/g, " ");
	str = str.replace(/chink/g, " ");
	str = str.replace(/chode/g, " ");
	str = str.replace(/\bcock\b/g, " ");
	str = str.replace(/cum/g, " ");
	str = str.replace(/cunt/g, " ");
	str = str.replace(/\bdick\b/g, " ");
	str = str.replace(/fag/g, " ");
	str = str.replace(/dyke/g, " ");
	str = str.replace(/fatass/g, " ");
	str = str.replace(/flamer/g, " ");
	str = str.replace(/motherfucker/g, " ");
	str = str.replace(/nigger/g, " ");
	str = str.replace(/nigga/g, " ");
	str = str.replace(/nutsack/g, " ");
	str = str.replace(/pussy/g, " ");
	str = str.replace(/skank/g, " ");
	str = str.replace(/slut/g, " ");
	str = str.replace(/\btard\b/g, " ");
	str = str.replace(/\btits/g, " ");
	str = str.replace(/twat/g, " ");
	str = str.replace(/\bvag\b/g, " ");
	str = str.replace(/\bwank/g, " ");
	str = str.replace(/whore/g, " ");

	str = str.replace(/\bAss/g, " ");
	str = str.replace(/Bastard/g, " ");
	str = str.replace(/Bitch/g, " ");
	str = str.replace(/Boner/g, " ");
	str = str.replace(/Fuck/g, " ");
	str = str.replace(/Shit/g, " ");
	str = str.replace(/Chesticle/g, " ");
	str = str.replace(/Chink/g, " ");
	str = str.replace(/Chode/g, " ");
	str = str.replace(/\bCock\b/g, " ");
	str = str.replace(/Cum/g, " ");
	str = str.replace(/Cunt/g, " ");
	str = str.replace(/Fag/g, " ");
	str = str.replace(/Dyke/g, " ");
	str = str.replace(/Fatass/g, " ");
	str = str.replace(/Flamer/g, " ");
	str = str.replace(/Motherfucker/g, " ");
	str = str.replace(/Nigger/g, " ");
	str = str.replace(/Nigga/g, " ");
	str = str.replace(/Nutsack/g, " ");
	str = str.replace(/Pussy/g, " ");
	str = str.replace(/Skank/g, " ");
	str = str.replace(/Slut/g, " ");
	str = str.replace(/\bTard\b/g, " ");
	str = str.replace(/\bTits/g, " ");
	str = str.replace(/Twat/g, " ");
	str = str.replace(/\bVag\b/g, " ");
	str = str.replace(/\bWank/g, " ");
	str = str.replace(/Whore/g, " ");

	str = str.replace(/\bASS/g, " ");
	str = str.replace(/BASTARD/g, " ");
	str = str.replace(/BITCH/g, " ");
	str = str.replace(/BONER/g, " ");
	str = str.replace(/FUCK/g, " ");
	str = str.replace(/SHIT/g, " ");
	str = str.replace(/CHESTICLE/g, " ");
	str = str.replace(/CHINK/g, " ");
	str = str.replace(/CHODE/g, " ");
	str = str.replace(/\bCOCK\b/g, " ");
	str = str.replace(/CUM/g, " ");
	str = str.replace(/CUNT/g, " ");
	str = str.replace(/\bDICK\b/g, " ");
	str = str.replace(/FAG/g, " ");
	str = str.replace(/DYKE/g, " ");
	str = str.replace(/FATASS/g, " ");
	str = str.replace(/FLAMER/g, " ");
	str = str.replace(/MOTHERFUCKER/g, " ");
	str = str.replace(/NIGGER/g, " ");
	str = str.replace(/NIGGA/g, " ");
	str = str.replace(/NUTSACK/g, " ");
	str = str.replace(/PUSSY/g, " ");
	str = str.replace(/SKANK/g, " ");
	str = str.replace(/SLUT/g, " ");
	str = str.replace(/\bTARD\b/g, " ");
	str = str.replace(/\bTITS/g, " ");
	str = str.replace(/TWAT/g, " ");
	str = str.replace(/\bVAG\b/g, " ");
	str = str.replace(/\bWANK/g, " ");
	str = str.replace(/WHORE/g, " ");
	
	textNode.nodeValue = str;
}


