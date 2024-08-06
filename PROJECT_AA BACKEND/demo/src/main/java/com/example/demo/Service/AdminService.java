package com.example.demo.Service;

import com.example.demo.Model.Admin;
import com.example.demo.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public Optional<Admin> getAdminById(Long adminId) {
        return adminRepository.findById(adminId);
    }

    public Admin createAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    public Admin updateAdmin(Long adminId, Admin adminDetails) {
        if (adminRepository.existsById(adminId)) {
            adminDetails.setAdminId(adminId);
            return adminRepository.save(adminDetails);
        } else {
            return null;
        }
    }

    public void deleteAdmin(Long adminId) {
        adminRepository.deleteById(adminId);
    }

    public Admin getAdminByEmail(String adminEmail) {
        return adminRepository.findByAdminEmail(adminEmail);
    }
}
