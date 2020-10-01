function DEVCLEAR() {
    KillRoom.create(400, 300, 'sky').setDepth(-2);
}
function EnemyKill1(KillRoom, diamond) {
    EnemyHPD = 0;
    diamond.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPD = 8;
}
function EnemyKill2(KillRoom, Slime) {
    EnemyHPP = 0;
    Slime.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPP = 12;
}
function EnemyKill3(KillRoom, Wabbit) {
    EnemyHPR = 0;
    Wabbit.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPR = 3;
}
function EnemyKill4(KillRoom, fly) {
    EnemyHPF = 0;
    fly.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPF = 5;
}
function EnemyKill5(KillRoom, flyshoot) {
    EnemyHPFS = 0;
    flyshoot.disableBody(true, true);
    FlyAlive = false;
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPFS = 6;
}
function EnemyKill6(KillRoom, Boss) {
    BossHP = 0;
    Boss.disableBody(true, true);
    BossTreasure();
    TrapDoor();
    killsLeft = 0;
    killsneeded = 0;
    killText.setText('KillsLeft: ' + killsLeft);
    BossHP = 100;
}
function EnemyKill7(KillRoom, Gurgling) {
    GurglingHP = 0;
    console.log('Gurgling 2 down');
    Gurgling.disableBody(true, true)
    BossTreasure();
    spawnPickup();
    TrapDoor();
    killsLeft = 0;
    killsneeded = 0;
    killText.setText('Kills Left: ' + killsLeft);
    GurglingHP = 50;
}
function EnemyKill8(KillRoom, clotty) {
    EnemyHPC = 0;
    clotty.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPC = 4;
    ClottyAlive = false;
}
function EnemyKill9(KillRoom, mine) {
    EnemyHPM = 0;
    mine.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPM = 1;
}
function EnemyKill10(KillRoom, enemy) {
    EnemyHPS = 0;
    enemy.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    Shooting = false;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPS = 7;
    EnemyAlive = false
}
function EnemyKill11(KillRoom, chaser) {
    EnemyHPChase = 0;
    chaser.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPChase = 3;
}
function EnemyKill12(KillRoom, Chub) {
    ChubHP = 0;
    Chub.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    ChubHP = 80;
}
function EnemyKill13(KillRoom, clot) {
    EnemyHPC1 = 0;
    clot.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPC1 = 4;
}
function EnemyKill14(KillRoom, flyshoots) {
    EnemyHPFS1 = 0;
    flyshoots.disableBody(true, true);
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
    EnemyHPFS1 = 5;
}