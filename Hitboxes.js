function RandomEnemy() {
    var EnemyRandom = Math.round(Math.random() * 8);
    if (EnemyRandom == 0) {
        Basic();
    } else if (EnemyRandom == 1) {
        Fast();
    } else if (EnemyRandom == 2) {
        Tank();
    } else if (EnemyRandom == 3) {
        Mine();
    } else if (EnemyRandom == 4) {
        Gunner();
    } else if (EnemyRandom == 5) {
        Tank();
    } else if (EnemyRandom == 6) {
        Fly();
    } else if (EnemyRandom == 7) {
        FlyGunner();
    } else if (EnemyRandom == 8) {
        Clotty();
    }
}
function spawnPickup() {
    var numberPickup = Math.round(Math.random() * 8);
    if (numberPickup == 0) {
        hp()
        console.log('Hp Pickup!');
    } else if (numberPickup == 1) {
        coin();
    } else if (numberPickup == 2) {
        coin();
    } else if (numberPickup == 3) {
        if (SoulChance == true) {
            soulH()
        } else {
        }
    } else if (numberPickup == 4) {
        deploybomb();
    } else if (numberPickup == 5) {
    } else if (numberPickup == 6) {
        key();
    } else if (numberPickup == 7) {
        soulH();
    } else if (numberPickup == 8) {
        if (SoulChance == true) {
            soulH()
        } else {
        }
    }
}
function tintedSpawn() {
    var numberPickup = Math.round(Math.random() * 4);
    if (numberPickup == 0) {
        TintedsoulH();
        TintedsoulH();
    } else if (numberPickup == 1) {
        Tintedkey();
        Tintedkey();
    } else if (numberPickup == 2) {
        Tintedbomb();
        Tintedbomb();
    } else if (numberPickup == 3) {
    } else if (numberPickup == 4) {
    }
}
function targetHitD(bomb, diamond) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPD -= 1;
        }, 100);
    }
    if (EnemyHPD <= 0) {
        diamond.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPD = 8;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
        EnemyHPD -= BulletDMG;
    }
}
function targetHitR(bomb, Wabbit) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPR -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPR -= 1;
        }, 100);
    }
    if (EnemyHPR <= 0) {
        Wabbit.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPR = 3;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitP(bomb, Slime) {
    var explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPP -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPP -= 1;
        }, 100);
    }
    if (EnemyHPP <= 0) {
        Slime.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPP = 12;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitM(bomb, mine) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPM -= BulletDMG;
    if (EnemyHPM <= 0) {
        mine.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPM = 1;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitF(bomb, fly) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPF -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPF -= 1;
        }, 100);
    }
    if (EnemyHPF <= 0) {
        fly.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPF = 5;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitFS(bomb, flyshoot) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPFS -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPFS -= 1;
        }, 100);
    }
    if (EnemyHPFS <= 0) {
        flyshoot.disableBody(true, true);
        FlyAlive = false;
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPFS = 6;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitFS1(bomb, flyshoots) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPFS1 -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPFS1 -= 1;
        }, 100);
    }
    if (EnemyHPFS1 <= 0) {
        flyshoots.disableBody(true, true);
        Fly1Alive = false;
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPFS1 = 5;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitC(bomb, clotty) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPC -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPC -= 1;
        }, 100);
    }
    if (EnemyHPC <= 0) {
        clotty.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPC = 4;
        ClottyAlive = false;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitC1(bomb, clot) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPC1 -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPC1 -= 1;
        }, 100);
    }
    if (EnemyHPC <= 0) {
        clot.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPC1 = 4;
        ClotAlive = false;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitS(bomb, enemy) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPS -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPS -= 1;
        }, 100);
    }
    if (EnemyHPS <= 0) {
        enemy.disableBody(true, true)
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        Shooting = false;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPS = 7;
        EnemyAlive = false
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitG(bomb, Gurgling) {
    const collide = this.sound.add('BC');
    collide.play();
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    GurglingHP -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            GurglingHP -= 1;
        }, 100);
    }
    if (GurglingHP <= 0) {
        if (GurgExist == 0) {
            Gurgling.disableBody(true, true)
            explode.play();
            killsLeft == 0;
            killsneeded == 0;
            GurgExist++;
            console.log('Gurgling 1 down');
            console.log(GurgExist);
            killText.setText('Kills Left: ' + killsLeft);
            GurglingHP = 50;
        } else if (GurgExist == 1) {
            console.log('Gurgling 2 down');
            Gurgling.disableBody(true, true)
            explode.play();
            BossTreasure();
            TrapDoor();
            killsLeft = 0;
            killsneeded = 0;
            killText.setText('Kills Left: ' + killsLeft);
            GurglingHP = 50;
            if (DevilRoomChance == true) {
                SpecialRoom.create(400, 100, 'star').setScale(2).setTint(0x00ff00);
            } else if (AngelRoomChance == true) {
                SpecialRoom.create(400, 100, 'star').setScale(2).setTint(0x0000ff);
            }
        }
    }
}
function targetHitChase(bomb, chaser) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPChase -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPChase -= 1;
        }, 100);
    }
    if (EnemyHPChase <= 0) {
        chaser.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPChase = 3;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitGurdy(bomb, Gurdy) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    GurdyHP -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            GurdyHP -= 1;
        }, 100);
    }
    if (GurdyHP <= 0) {
        chaser.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        GurdyHP = 100;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitChub(bomb, Chub) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    ChubHP -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            EnemyHPChase -= 1;
        }, 100);
    }
    if (ChubHP <= 0) {
        chaser.disableBody(true, true);
        explode.play();
        TrapDoor();
        killsLeft = 0;
        killsneeded = 0;
        killText.setText('KillsLeft: ' + killsLeft);
        ChubHP = 80;
        if (DevilRoomChance == true) {
            SpecialRoom.create(400, 100, 'star').setScale(2).setTint(0x00ff00);
        } else if (AngelRoomChance == true) {
            SpecialRoom.create(400, 100, 'star').setScale(2).setTint(0x0000ff);
        }
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function bossHit(bomb, Boss) {
    const collide = this.sound.add('BC');
    collide.play();
    const explode = this.sound.add('bossded');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    BossHP -= BulletDMG;
    if (FireActive == true) {
        setTimeout(function () {
            BossHP -= 1;
        }, 100);
    }
    if (BossHP <= 0) {
        Boss.disableBody(true, true);
        BossTreasure();
        explode.play();
        TrapDoor();
        killsLeft = 0;
        killsneeded = 0;
        killText.setText('KillsLeft: ' + killsLeft);
        BossHP = 100;
        if (DevilRoomChance == true) {
            SpecialRoom.create(400, 100, 'star').setScale(2).setTint(0x00ff00);
        } else if (AngelRoomChance == true) {
            SpecialRoom.create(400, 100, 'star').setScale(2).setTint(0x0000ff);
        }
    }
    if (BossHP <= 75) {
        if (waveAt75 == true) {
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            waveAt75 = false;
            waveAt50 = true;
        }
    }
    if (BossHP <= 50) {
        if (waveAt50 == true) {
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            waveAt50 = false;
            waveAt25 = true;
        }
    }
    if (BossHP <= 25) {
        if (waveAt25 == true) {
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            waveAt25 = false
        }
    }
}
function BulletCollide(EnemyBullet, bomb) {
    const explode = this.sound.add('pew');
    EnemyBullet.disableBody(true, true);
    bomb.disableBody(true, true);
    explode.play();
}
function BulletCollide1(FlyingBullet, bomb) {
    const explode = this.sound.add('pew');
    FlyingBullet.disableBody(true, true);
    bomb.disableBody(true, true);
    explode.play();
}
function mineHitD(mines, diamonds) {
    const explode = this.sound.add('boom');
    mines.disableBody(true, true);
    diamonds.disableBody(true, true);
    explode.play();
    killsLeft -= 2;
    killsneeded -= 2;
    killText.setText('KillsLeft: ' + killsLeft);
}
function mineHitR(mines, rocks) {
    const explode = this.sound.add('boom');
    mines.disableBody(true, true);
    rocks.disableBody(true, true);
    explode.play();
    killsLeft -= 2;
    killsneeded -= 2;
    killText.setText('KillsLeft: ' + killsLeft);
}
function mineHitP(mines, patrols) {
    const explode = this.sound.add('boom');
    mines.disableBody(true, true);
    patrols.disableBody(true, true);
    explode.play();
    killsLeft -= 2;
    killsneeded -= 2;
    killText.setText('KillsLeft: ' + killsLeft);
}
function NoOverlap(bombs1, bombs1) {
    bombs1.disableBody(true, true);
    bombs1.disableBody(true, true);
}
function NoOverlap(bombs2, bombs2) {
    bombs2.disableBody(true, true);
    bombs2.disableBody(true, true);
}
function NoOverlap(bombs3, bombs3) {
    bombs3.disableBody(true, true);
    bombs3.disableBody(true, true);
}
function NoOverlap(bombs4, bombs4) {
    bombs4.disableBody(true, true);
    bombs4.disableBody(true, true);
}
function NoOverlap(lazerbeam, lazerbeam) {
    lazerbeam.disableBody(true, true);
    lazerbeam.disableBody(true, true);
    lazerbeam.setVisible(false);
    lazerbeam.setActive(false);
}
function bulletHit(bullets, bullets) {
    bullets.disableBody(true, true);
    var collide = this.sound.add('BC');
    collide.play();
}
function youHit(player, patrols) {
    if (Iframes == true) {
    } else if (currentSouls >= 1) {
        Iframes = true;
        player.setTint(0xffffff);
        setInterval(function () {
            Iframes = false;
        }, 1000);
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        patrols.disableBody(true, true)
        currentSouls--;
        SoulText.setText('Soul Hearts: ' + currentSouls);
        const explode = this.sound.add('BC');
        explode.play();
    } else if (currentSouls == 0) {
        Iframes = true;
        player.setTint(0xffffff);
        setInterval(function () {
            Iframes = false;
        }, 1000);
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        patrols.disableBody(true, true)
        currentHP -= 1;
        HPText.setText('Current Hp: ' + currentHP);
        const explode = this.sound.add('BC');
        explode.play();
        if (currentHP <= 0) {
            HPText = 0;
            const collide = this.sound.add('playerded');
            collide.play();
            this.physics.pause();
            player.setTint(0xff0000);
            let gameOverText = this.add.text(game.config.width / 2.5,
                game.config.height / 3,
                'GAME OVER',
                { fontSize: '32px', fill: '#fff' });
            gameOverText.setDepth(1);
            gameOver = true;
            keyA = false;
            keyS = false;
            keyD = false;
            keyW = false;
        }
    }
}
function BossHitPlayer(player, Boss) {
    if (Iframes == true) {
    } else if (currentSouls > 0) {
        Iframes = true;
        player.setTint(0xffffff);
        setInterval(function () {
            Iframes = false;
        }, 1000);
        currentSouls--;
        SoulText.setText('Soul Hearts: ' + currentSouls);
        const explode = this.sound.add('BC');
        explode.play();
    } else if (currentSouls == 0) {
        Iframes = true;
        player.setTint(0xffffff);
        setInterval(function () {
            Iframes = false;
        }, 1000);
        currentHP -= 1;
        HPText.setText('Current Hp: ' + currentHP);
        const explode = this.sound.add('BC');
        explode.play();
        if (currentHP <= 0) {
            HPText = 0;
            const collide = this.sound.add('playerded');
            collide.play();
            this.physics.pause();
            player.setTint(0xff0000);
            let gameOverText = this.add.text(game.config.width / 2.5,
                game.config.height / 3,
                'GAME OVER',
                { fontSize: '32px', fill: '#fff' });
            gameOverText.setDepth(1);
            gameOver = true;
            keyA = false;
            keyS = false;
            keyD = false;
            keyW = false;
        }
    }
}
function BulletOw(player, EnemyBullet) {
    if (Iframes == true) {
    } else if (currentSouls > 0) {
        Iframes = true;
        player.setTint(0xffffff);
        setInterval(function () {
            Iframes = false;
        }, 1000);
        EnemyBullet.disableBody(true, true)
        currentSouls--;
        SoulText.setText('Soul Hearts: ' + currentSouls);
        const explode = this.sound.add('BC');
        explode.play();
    } else if (currentSouls <= 0) {
        Iframes = true;
        player.setTint(0xffffff);
        setInterval(function () {
            Iframes = false;
        }, 1000);
        EnemyBullet.disableBody(true, true)
        currentHP -= 1;
        HPText.setText('Current Hp: ' + currentHP);
        const explode = this.sound.add('BC');
        explode.play();
        if (currentHP <= 0) {
            EnemyBullet.disableBody(true, true)
            HPText = 0;
            const collide = this.sound.add('playerded');
            collide.play();
            this.physics.pause();
            player.setTint(0xff0000);
            let gameOverText = this.add.text(game.config.width / 2.5,
                game.config.height / 3,
                'GAME OVER',
                { fontSize: '32px', fill: '#fff' });
            gameOverText.setDepth(1);
            gameOver = true;
            keyA = false;
            keyS = false;
            keyD = false;
            keyW = false;
        }
    }
}
function Deleto(wall1, EnemyBullet) {
    EnemyBullet.disableBody(true, true)
}
function WallHit(bomb) {
    bomb.disableBody(true, true)
}
function RestartW(ResetZone, wall1) {
    wall1.disableBody(true, true);
}
function RestartP(ResetZone, Pit) {
    Pit.disableBody(true, true);
}
function Restart1(ResetZone, Door1E) {
    Door1E.disableBody(true, true);
}
function Restart2(ResetZone, Door2E) {
    Door2E.disableBody(true, true);
}
function Restart3(ResetZone, Door3E) {
    Door3E.disableBody(true, true);
}
function Restart4(ResetZone, Door4E) {
    Door4E.disableBody(true, true);
}
function Restart1W(ResetZone, Door1Wall) {
    Door1Wall.disableBody(true, true);
}
function Restart2W(ResetZone, Door2Wall) {
    Door2Wall.disableBody(true, true);
}
function Restart3W(ResetZone, Door3Wall) {
    Door3Wall.disableBody(true, true);
}
function Restart4W(ResetZone, Door4Wall) {
    Door4Wall.disableBody(true, true);
}
function RestartR(ResetZone, RoomIn) {
    RoomIn.disableBody(true, true);
}
function Restart(ResetZone, ResetDelete) {
    ResetZone.disableBody(true, true);
    ResetDelete.disableBody(true, true);
}
function CheckFly() {
    if (FlyingActive == true) {
        this.physics.world.removeCollider(qween);
        this.physics.world.removeCollider(king);
    } else if (FlyingActive == false) {
        var qween = this.physics.add.collider(player, wall1);
        var king = this.physics.add.collider(player, Pit);
        qween
        king
    }
}
function Deleto1(WallBorder, wall1) {
    wall1.disableBody(true, true)
}
function Deleto2(WallBorder, Pit) {
    Pit.disableBody(true, true)
}
function RockBoom(bombF, wall1) {
    wall1.disableBody(true, true);
    bombF.disableBody(true, true);
}
function TintedBoom(bombF, tinted) {
    const collide = this.sound.add('boom');
    collide.play();
    tintedSpawn();
    tinted.disableBody(true, true)
}
function NextFloor(player, Trapdoor) {
    BackDel.create(300, 300);
    Trapdoor.disableBody(true, true);
}
function NewFloor1(basement1, BackDel) {
    if (LabyrinthFloor == 1) {
        console.log('Floor2');
        LabyrinthFloor = 2;
        basement1.disableBody(true, true);
        BackDel.disableBody(true, true);
        Room.create(660, 60, 'Room').setScale(0.5).setDepth(3)
        basement2.create(400, 300, 'Labyrinth 2').setDepth(-1);
        LevelText.setVisible(true, true);
        LevelText.setText('Explored Labyrinth 2');
        setTimeout(function () {
            LevelText.setVisible(false);
        }, 1000);
        RoomLoad = true;
        TreasurePossible = true;
        ShopPossible = true;
        BossPossible = true;
    }
}
function NewFloor2(basement2, BackDel) {
    if (LabyrinthFloor == 2) {
        console.log('Floor3');
        LabyrinthFloor = 3;
        basement2.disableBody(true, true);
        BackDel.disableBody(true, true);
        Room.create(660, 220, 'Room').setScale(0.5).setDepth(3)
        basement3.create(400, 300, 'Labyrinth 3').setDepth(-1);
        LevelText.setVisible(true, true);
        LevelText.setText('Ancient Labyrinth 1');
        setTimeout(function () {
            LevelText.setVisible(false);
        }, 1000);
        RoomLoad = true;
        TreasurePossible = true;
        ShopPossible = true;
        BossPossible = true;
    }
}
function NewFloor3(basement3, BackDel) {
    if (LabyrinthFloor == 3) {
        console.log('Floor4');
        LabyrinthFloor = 4;
        basement3.disableBody(true, true);
        BackDel.disableBody(true, true);
        Room.create(740, 140, 'Room').setScale(0.5).setDepth(3)
        basement4.create(400, 300, 'Labyrinth 4').setDepth(-1);
        LevelText.setVisible(true, true);
        LevelText.setText('Ancient Labyrinth 2');
        setTimeout(function () {
            LevelText.setVisible(false);
        }, 1000);
        RoomLoad = true;
        TreasurePossible = true;
        ShopPossible = true;
        BossPossible = true;
    }
}
function NewFloor4(basement4, BackDel) {
    if (LabyrinthFloor == 4) {
        console.log('Floor5');
        LabyrinthFloor = 5;
        basement4.disableBody(true, true);
        BackDel.disableBody(true, true);
        Room.create(580, 140, 'Room').setScale(0.5).setDepth(4)
        basement5.create(400, 300, 'Labyrinth 5').setDepth(-1);
        LevelText.setVisible(true, true);
        LevelText.setText('Forgotten Labyrinth 1');
        setTimeout(function () {
            LevelText.setVisible(false);
        }, 1000);
        RoomLoad = true;
        TreasurePossible = true;
        ShopPossible = true;
        BossPossible = true;
    }
}
function BombOw(player, bombA) {
    currentHP -= 1;
    HPText.setText('Current Hp: ' + currentHP);
}
function ChubEatBomb(Chub, bombF) {
    bombF.disableBody(true, true);
    ChubAteBomb = true;
}