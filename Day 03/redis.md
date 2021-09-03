knshika@optimus  ~/.../Day 22 Meme-Generator/meme-generator   main  psql -U postgres
psql (12.8 (Ubuntu 12.8-0ubuntu0.20.04.1))
Type "help" for help.

postgres=# exit;
 knshika@optimus  ~/.../Day 22 Meme-Generator/meme-generator   main  redis-cli
127.0.0.1:6379> SUBSCRIBE devsnest
Reading messages... (press Ctrl-C to quit)
1) "subscribe"
2) "devsnest"
3) (integer) 1
1) "message"
2) "devsnest"
3) "hello"
^C
 ✘ knshika@optimus  ~/.../Day 22 Meme-Generator/meme-generator   main  redis-cli
127.0.0.1:6379> PSUBSCRIBE d*
Reading messages... (press Ctrl-C to quit)
1) "psubscribe"
2) "d*"
3) (integer) 1
1) "pmessage"
2) "d*"
3) "devsnest"
4) "hii"
1) "pmessage"
2) "d*"
3) "dev"
4) "hmmm"
^C      
 ✘ knshika@optimus  ~/.../Day 22 Meme-Generator/meme-generator   main  redis-cli
127.0.0.1:6379> UNSUBSCRIBE devsnest
1) "unsubscribe"
2) "devsnest"
3) (integer) 0
127.0.0.1:6379> PUNSUBSCRIBE d*
1) "punsubscribe"
2) "d*"
3) (integer) 0
127.0.0.1:6379> XADD mystream 1000 name Knshi
"1000-0"
127.0.0.1:6379> XADD mystream 1001 name Knshika
"1001-0"
127.0.0.1:6379> XADD mystream 1002 name Pooja
"1002-0"
127.0.0.1:6379> XADD mystream * name Ded
"1630550537816-0"
127.0.0.1:6379> XADD mystream * name chiku
"1630550548235-0"
127.0.0.1:6379> XADD mystream MAXLEN 100000 * name devs
"1630550623792-0"
127.0.0.1:6379> XREAD COUNT 200STREAMS mystream 0
(error) ERR value is not an integer or out of range
127.0.0.1:6379> XREAD COUNT 200 STREAMS mystream 0
1) 1) "mystream"
   2) 1) 1) "1000-0"
         2) 1) "name"
            2) "Knshi"
      2) 1) "1001-0"
         2) 1) "name"
            2) "Knshika"
      3) 1) "1002-0"
         2) 1) "name"
            2) "Pooja"
      4) 1) "1630550537816-0"
         2) 1) "name"
            2) "Ded"
      5) 1) "1630550548235-0"
         2) 1) "name"
            2) "chiku"
      6) 1) "1630550623792-0"
         2) 1) "name"
            2) "devs"
127.0.0.1:6379> XREAD COUNT 200 STREAMS mystream 1002-0
1) 1) "mystream"
   2) 1) 1) "1630550537816-0"
         2) 1) "name"
            2) "Ded"
      2) 1) "1630550548235-0"
         2) 1) "name"
            2) "chiku"
      3) 1) "1630550623792-0"
         2) 1) "name"
            2) "devs"
127.0.0.1:6379> XREAD BLOCK 10000 STREAM mystream 0
(error) ERR syntax error
127.0.0.1:6379> XREAD BLOCK 10000 STREAM mystream mystream 0
(error) ERR syntax error
127.0.0.1:6379> XREAD BLOCK 10000 STREAMS mystream 0
1) 1) "mystream"
   2) 1) 1) "1000-0"
         2) 1) "name"
            2) "Knshi"
      2) 1) "1001-0"
         2) 1) "name"
            2) "Knshika"
      3) 1) "1002-0"
         2) 1) "name"
            2) "Pooja"
      4) 1) "1630550537816-0"
         2) 1) "name"
            2) "Ded"
      5) 1) "1630550548235-0"
         2) 1) "name"
            2) "chiku"
      6) 1) "1630550623792-0"
         2) 1) "name"
            2) "devs"
127.0.0.1:6379> XREAD BLOCK 0 STREAMS mystream 1001-0
1) 1) "mystream"
   2) 1) 1) "1002-0"
         2) 1) "name"
            2) "Pooja"
      2) 1) "1630550537816-0"
         2) 1) "name"
            2) "Ded"
      3) 1) "1630550548235-0"
         2) 1) "name"
            2) "chiku"
      4) 1) "1630550623792-0"
         2) 1) "name"
            2) "devs"
127.0.0.1:6379> XREAD BLOCK 10000 STREAMS mysystem $
(nil)
(10.03s)
127.0.0.1:6379> XREAD BLOCK 10000 STREAMS mysystem $
(nil)
(10.10s)
127.0.0.1:6379> XREAD BLOCK 10000 STREAMS mystream $
1) 1) "mystream"
   2) 1) 1) "1630551523294-0"
         2) 1) "name"
            2) "devsnest"
(5.27s)
127.0.0.1:6379> XRANGE mystream 0 -1
(error) ERR Invalid stream ID specified as stream command argument
127.0.0.1:6379> XRANGE mystream 0 -1 [COUNT count]
 knshika@optimus  ~/.../Day 22 Meme-Generator/meme-generator   main  redis-cli
127.0.0.1:6379> XREAD COUNT 200 STREAMS mystream 0
1) 1) "mystream"
   2) 1) 1) "1000-0"
         2) 1) "name"
            2) "Knshi"
      2) 1) "1001-0"
         2) 1) "name"
            2) "Knshika"
      3) 1) "1002-0"
         2) 1) "name"
            2) "Pooja"
      4) 1) "1630550537816-0"
         2) 1) "name"
            2) "Ded"
      5) 1) "1630550548235-0"
         2) 1) "name"
            2) "chiku"
      6) 1) "1630550623792-0"
         2) 1) "name"
            2) "devs"
      7) 1) "1630551454503-0"
         2) 1) "name"
            2) "devsnest"
      8) 1) "1630551523294-0"
         2) 1) "name"
            2) "devsnest"
127.0.0.1:6379> XRANGE  mystream 1001-0 1630550623792-0
1) 1) "1001-0"
   2) 1) "name"
      2) "Knshika"
2) 1) "1002-0"
   2) 1) "name"
      2) "Pooja"
3) 1) "1630550537816-0"
   2) 1) "name"
      2) "Ded"
4) 1) "1630550548235-0"
   2) 1) "name"
      2) "chiku"
5) 1) "1630550623792-0"
   2) 1) "name"
      2) "devs"
127.0.0.1:6379> XRANGE  mystream 1001-0 1630550623792-0 COUNT 3
1) 1) "1001-0"
   2) 1) "name"
      2) "Knshika"
2) 1) "1002-0"
   2) 1) "name"
      2) "Pooja"
3) 1) "1630550537816-0"
   2) 1) "name"
      2) "Ded"
127.0.0.1:6379> XRANGE mystream - + COUNT 2
1) 1) "1000-0"
   2) 1) "name"
      2) "Knshi"
2) 1) "1001-0"
   2) 1) "name"
      2) "Knshika"
127.0.0.1:6379> XREVRANGE mystream - + COUNT 2
(empty list or set)
127.0.0.1:6379> XREVRANGE mystream + -  COUNT 2
1) 1) "1630551523294-0"
   2) 1) "name"
      2) "devsnest"
2) 1) "1630551454503-0"
   2) 1) "name"
      2) "devsnest"
127.0.0.1:6379> 


===========================================================


 knshika@optimus  ~/.../Day 22 Meme-Generator/meme-generator   main  redis-cli
127.0.0.1:6379> PUBLISH devsnest hello
(integer) 1
127.0.0.1:6379> PIBLISH devsnest hii
(error) ERR unknown command `PIBLISH`, with args beginning with: `devsnest`, `hii`, 
127.0.0.1:6379> PUBLISH devsnest hii
(integer) 1
127.0.0.1:6379> PUBLISH dev hmmm
(integer) 1
127.0.0.1:6379> PUBLISH red pink
(integer) 0
127.0.0.1:6379> XADD mystream * name devsnest
"1630551454503-0"
127.0.0.1:6379> XADD mystream * name devsnest
"1630551523294-0"
127.0.0.1:6379> 
