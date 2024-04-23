<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/book" class="navbar-brand">Quản lý Thư Viện</a>
        <div class="navbar-nav ml-auto">
            <router-link :to="{ name: 'book' }" class="nav-link">
                Quản lý Sách
                <i class="fas fa-address-book"></i>
            </router-link>
            <router-link :to="{ name: 'NXB' }" class="nav-link">
                Quản lý NXB
                <i class="fas fa-address-book"></i>
            </router-link>
            <router-link :to="{ name: 'QLMS' }" class="nav-link">
                Quản lý QLMS
                <i class="fas fa-address-book"></i>
            </router-link>
        </div>
    </nav>
</template>
