export default JSON.parse(
`{
   "id":"fa093ee2-d52d-4106-b535-42de8f86789a",
   "offsetX":0,
   "offsetY":0,
   "zoom":100,
   "links":[
      {
         "id":"44e3fdc4-8bda-42a7-b01f-645745c540d9",
         "_class":"LinkModel",
         "selected":false,
         "type":"default",
         "source":"0c68bf7b-6489-4cf5-8e90-f632bcea59e3",
         "sourcePort":"9e4025cc-685c-42f7-91dd-b8bf6fe1b68e",
         "target":"a08f533c-b491-4419-b9e3-f547327d92e1",
         "targetPort":"f84ee980-79a1-4860-a0b0-e9ff5650e3fe",
         "points":[
            {
               "id":"3d837648-51b8-4d08-bcc2-14f7389029c3",
               "_class":"PointModel",
               "selected":false,
               "x":157.953125,
               "y":132.5
            },
            {
               "id":"ef45fed2-45e3-4637-8c2a-74abfc50a216",
               "_class":"PointModel",
               "selected":false,
               "x":409.5,
               "y":132.5
            }
         ],
         "extras":{

         }
      }
   ],
   "nodes":[
      {
         "id":"0c68bf7b-6489-4cf5-8e90-f632bcea59e3",
         "_class":"DefaultNodeModel",
         "selected":false,
         "type":"default",
         "x":100,
         "y":100,
         "extras":{

         },
         "ports":[
            {
               "id":"9e4025cc-685c-42f7-91dd-b8bf6fe1b68e",
               "_class":"DefaultPortModel",
               "selected":false,
               "name":"out-1",
               "parentNode":"0c68bf7b-6489-4cf5-8e90-f632bcea59e3",
               "links":[
                  "44e3fdc4-8bda-42a7-b01f-645745c540d9"
               ],
               "in":false,
               "label":"Out"
            }
         ],
         "name":"Node 1",
         "color":"rgb(0, 192, 255)"
      },
      {
         "id":"a08f533c-b491-4419-b9e3-f547327d92e1",
         "_class":"DefaultNodeModel",
         "selected":false,
         "type":"default",
         "x":400,
         "y":100,
         "extras":{

         },
         "ports":[
            {
               "id":"f84ee980-79a1-4860-a0b0-e9ff5650e3fe",
               "_class":"DefaultPortModel",
               "selected":false,
               "name":"in-1",
               "parentNode":"a08f533c-b491-4419-b9e3-f547327d92e1",
               "links":[
                  "44e3fdc4-8bda-42a7-b01f-645745c540d9"
               ],
               "in":true,
               "label":"In"
            }
         ],
         "name":"Node 2",
         "color":"rgb(192, 255, 0)"
      }
   ]
}`
);
