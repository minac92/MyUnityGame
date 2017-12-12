#pragma strict

public var startSheet:GameObject;

public var aboutSheet:GameObject;

public var aboutUsSheet:GameObject;


function Start () {
	aboutSheet.SetActive(false);
	aboutUsSheet.SetActive(false);
   
}

function clickedStart () {
	 Destroy (gameObject);
}

function clickedAbout () {
	startSheet.SetActive(false);
    aboutSheet.SetActive(true);
	aboutUsSheet.SetActive(false);
}

function clickedBack () {
    startSheet.SetActive(true);
	aboutSheet.SetActive(false);
    aboutUsSheet.SetActive(false);
	
}
function clickedAboutUs () {
	startSheet.SetActive(false);
    aboutSheet.SetActive(false);
	aboutUsSheet.SetActive(true);
}
