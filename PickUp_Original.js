#pragma strict
/*
PickUp

Attach to objects that you want to pickup. Specify the parent GameObject, the position offset, the amount of force to throw the object (drop with 0,0,0).

pickMeUp(_pickupParent) - pick the object up by making it a child and positioning it
tossOrDrop() - throw or drop the object

*/


public var pickupPositionOffset:Vector3;//the position to offset the object when picked up
public var forceStrength:Vector3;//The amount of force to apply
public var forceMultiplier:float = 1;//Multiplied with forceStrength

public var useRelativeForce:boolean = true;

public var dropWithGravity:boolean = true;

private var isCarrying:boolean = false; //private "state" variable to toggle whether the object is thrown or not
private var initialParent:Transform;//Store the initial parent for dropping the object
private var rb:Rigidbody;


function Start(){
	if (GetComponent.<Rigidbody>()){//if there is a rigidbody component attached to this GameObject, use it
		rb = GetComponent.<Rigidbody>();
	}
}
function Update(){}

public function pickupMeUp(_pickupParent:GameObject){
	if (isCarrying == true){
		tossOrDrop();//If the GameObject is already being carried, drop it and get outta here
		return;
	}
	if (rb){
		rb.velocity = rb.angularVelocity = Vector3.zero;//if the GameObject is already moving, reset it
		/* rb.useGravity = false; *////Turn off gravity so the object can be "carried"
        rb.isKinematic = true;
        
	}

	initialParent = transform.parent;

	transform.SetParent(_pickupParent.transform);
	transform.localPosition = Vector3.zero;
	transform.rotation = _pickupParent.transform.rotation;
	transform.localPosition += pickupPositionOffset;
	isCarrying = true;

}
public function tossOrDrop(){
		transform.SetParent(initialParent);//Unchild this object
		if (rb){
			rb.useGravity = dropWithGravity;//Turn gravity on depending on the Inspector value
            rb.isKinematic = false;
			if (useRelativeForce == true){
				rb.AddRelativeForce(forceStrength*forceMultiplier);
			}else{
				rb.AddForce(forceStrength*forceMultiplier);
			}
		}
		isCarrying = false;
}