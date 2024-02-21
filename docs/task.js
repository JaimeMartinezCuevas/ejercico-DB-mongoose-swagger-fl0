module.exports = {

    paths: {
      "/create": {
        post: {
          tags: {
            Task: " Create a task",
          },
          description: "Create Task",
          operationId: "createTask",
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Task",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Task created successfully",
            },
            500: {
              description: "Server error",
            },
          },
        },
      }, 
      
      // end y /create
      "/":{
        get:{
            tags:{
                Task: " Get all tasks",
            },
            description: "Get Task",
            operationId: "getTasks",
            parameters: [],
            requestBody:{
                content: {
                    "application/json":{
                        schema: {
                            $ref: "#/components/schemas/Task",
                        },
                    },
                },
            },
            responses:{
                201: {
                    description: "All task has got successfully",
                },
                500:{
                    description: "server error",
                },
            }, 
        }
    }, 
    
    // end / 
    "/id/{_id}":{
        put: {
          tags: {
            Task: " Update a task",
          },
          description: "Update Task",
          operationId: "updateTask",
          parameters: [
            {
              name: "_id",
              in: "path",
              schema: {
                $ref: "#/components/schemas/_id",
              },
              description: "Id of Task to be updated",
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Task" },
              },
            },
          },
          responses: {
            200: { description: "Task updated successfully" },
            500: { description: "Server error" },
          },
        },       
        delete: {
          tags: {
            Task: " Delete a task",
          },
          description: "Delete Task",
          operationId: "deleteTask",
          parameters: [
            {
              name: "_id",
              in: "path",
              schema: {
                $ref: "#/components/schemas/_id",
              },
              description: "Id of Task to be deleted",
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Task" },
              },
            },
          },
          responses: {
            200: { description: "Task deleted successfully" },
            500: { description: "Server error" },
          },
        },
      },
    
    }
};
  