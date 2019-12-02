
let heartbeat_speed = 90;

let heartbeat_interval_value = parseInt( 60000 / heartbeat_speed); // интервал биения сердца в миллисекундах. По умолчанию - 90 ударов, то есть ~666 миллисекунд

let heartbeat_interval_timer = setInterval('heartbeat()', heartbeat_interval_value); 

let decrement_timer = setInterval('decrement_heartbeat_speed()', 2000);

let update_heartbeats_counter_timer = setInterval('update_heartbeats_counter()', 200);

let beat_off_timer;

function heart_on(){
	heart_obj.style.transform = 'scale(1.4)';
}

function heart_off(){
	heart_obj.style.transform = 'scale(1.0)';
}

function heartbeat(){
	heart_on();
	beat_off_timer = setTimeout('heart_off()', 100);
}

function decrement_heartbeat_speed(){
	heartbeat_speed -= 1;
	clearInterval(heartbeat_interval_timer);

	if(heartbeat_speed <= 30){
		heartbeat_speed = 0;
		return;
	}

	heartbeat_interval_value = parseInt( 60000 / heartbeat_speed);
	heartbeat_interval_timer = setInterval('heartbeat()', heartbeat_interval_value);
}

function adrenaline(){
	if (heartbeat_speed <= 30) return;

	heartbeat_speed += 30;
	clearInterval(heartbeat_interval_timer);

	if(heartbeat_speed >= 160){
		heartbeat_speed = 0;
		alert("Too much adrenaline!");
		return;
	}
	
	heartbeat_interval_value = parseInt( 60000 / heartbeat_speed);
	heartbeat_interval_timer = setInterval('heartbeat()', heartbeat_interval_value);
}

function reanimate(){
	if(heartbeat_speed > 30 && heartbeat_speed < 160){
		alert("Not dead yet");
		return;
	}

	heartbeat_speed = 90;
	heartbeat_interval_value = parseInt( 60000 / heartbeat_speed);
	heartbeat_interval_timer = setInterval('heartbeat()', heartbeat_interval_value);
}

function update_heartbeats_counter(){
	heartbeats_counter.innerHTML = heartbeat_speed;
}