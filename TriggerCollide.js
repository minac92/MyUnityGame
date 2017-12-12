#pragma strict

public var ToggleActiveGameObject:GameObject;

function Start () {}

function Update () {}

function OnTriggerEnter(){
	if (!ToggleActiveGameObject){
		ToggleActiveGameObject = this.gameObject;
	}
	ToggleActiveGameObject.SetActive(!ToggleActiveGameObject.activeSelf);//SetActive to whatever the opposite of the current active value is - if it's true, make it false etc.
}