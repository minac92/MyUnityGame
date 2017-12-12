#pragma strict
public var playerCamera:GameObject;

function Start (){
	if (!playerCamera){
		playerCamera = Camera.main.gameObject;
	}
}
public function JumpToGameObject(go:GameObject){
	playerCamera.transform.position = go.transform.position;
}