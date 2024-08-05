// package com.example.demo.Controller;

// import com.example.demo.Model.Admin;
// import com.example.demo.Service.AdminService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/admins")

// public class AdminController {

//     @Autowired
//     private AdminService adminService;

//     @GetMapping
//     public List<Admin> getAllAdmins() {
//         return adminService.getAllAdmins();
//     }

//     @GetMapping("/{id}")
//     public Admin getAdminById(@PathVariable int id) {
//         return adminService.getAdminById(id);
//     }

//     @PostMapping
//     public Admin createAdmin(@RequestBody Admin admin) {
//         return adminService.saveAdmin(admin);
//     }

//     @PutMapping("/{id}")
//     public Admin updateAdmin(@PathVariable int id, @RequestBody Admin admin) {
//         Admin existingAdmin = adminService.getAdminById(id);
//         if (existingAdmin != null) {
//             existingAdmin.setName(admin.getName());
//             existingAdmin.setEmailid(admin.getEmailid());
//             existingAdmin.setPassword(admin.getPassword());
//             return adminService.saveAdmin(existingAdmin);
//         } else {
//             return null; 
//         }
//     }

//     @DeleteMapping("/{id}")
//     public void deleteAdmin(@PathVariable int id) {
//         adminService.deleteAdmin(id);
//     }
// }

package com.example.demo.Controller;

import com.example.demo.Model.Admin;
import com.example.demo.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admins")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping
    public List<Admin> getAllAdmins() {
        return adminService.getAllAdmins();
    }

    @GetMapping("/{id}")
    public Admin getAdminById(@PathVariable int id) {
        Admin admin = adminService.getAdminById(id);
        if (admin != null) {
            admin.setUsers(admin.getUsers()); // Ensure users are fetched
        }
        return admin;
    }

    @PostMapping
    public Admin createAdmin(@RequestBody Admin admin) {
        return adminService.saveAdmin(admin);
    }

    @PutMapping("/{id}")
    public Admin updateAdmin(@PathVariable int id, @RequestBody Admin admin) {
        Admin existingAdmin = adminService.getAdminById(id);
        if (existingAdmin != null) {
            existingAdmin.setName(admin.getName());
            existingAdmin.setEmailid(admin.getEmailid());
            existingAdmin.setPassword(admin.getPassword());
            return adminService.saveAdmin(existingAdmin);
        } else {
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public void deleteAdmin(@PathVariable int id) {
        adminService.deleteAdmin(id);
    }
}





