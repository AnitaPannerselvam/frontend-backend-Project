package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Model.TaskCategory;
import com.example.demo.Service.TaskCategoryService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/task-categories")
public class TaskCategoryController {

    @Autowired
    private TaskCategoryService taskCategoryService;

    @PostMapping
    public ResponseEntity<TaskCategory> create(@Valid @RequestBody TaskCategory taskCategory) {
        TaskCategory savedTaskCategory = taskCategoryService.save(taskCategory);
        return new ResponseEntity<>(savedTaskCategory, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TaskCategory> getById(@PathVariable Long id) {
        TaskCategory taskCategory = taskCategoryService.getById(id);
        return taskCategory != null ? 
            new ResponseEntity<>(taskCategory, HttpStatus.OK) :
            new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TaskCategory> update(@PathVariable Long id, @Valid @RequestBody TaskCategory taskCategory) {
        try {
            TaskCategory updatedTaskCategory = taskCategoryService.update(id, taskCategory);
            return new ResponseEntity<>(updatedTaskCategory, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        taskCategoryService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
