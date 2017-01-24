#pragma strict

var movementSpeed: int;

function Start() {
	var transform: Transform = GetComponent.<Transform>();
}

function Update() {
	transform.Translate((Vector3(Input.GetAxis('Horizontal'), 0, Input.GetAxis('Vertical')) * movementSpeed) * Time.deltaTime);
}

function OnCollisionEnter(collision: Collision) {
	Debug.Log('Collision detected.');
}
