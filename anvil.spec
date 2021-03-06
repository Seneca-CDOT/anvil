%define debug_package %{nil}
Name:           anvil
Version:        3.0a
Release:        1%{?dist}
Summary:        Alteeve Anvil! complete package


License:        GPLv2+
URL:            https://github.com/digimer/anvil
Source0:        https://github.com/digimer/anvil/archive/master.tar.gz
BuildArch:      noarch


%description
This package generates the anvil-core, anvil-striker, and anvil-node RPM's


%package core
Summary:        Alteeve Anvil! Core package
Requires:       perl-XML-Simple
Requires:       postgresql-plperl
Requires:       postgresql-contrib
Requires:       perl-NetAddr-IP
Requires:       perl-DBD-Pg
Requires:       rsync
Requires:       perl-Log-Journald
Requires:       perl-Net-SSH2
Requires:       firewalld
Conflicts:      iptables-services
# iptables-services conflicts with firewalld


%description core
Common base libraries required for the Anvil! system


%package striker
Summary:        Alteeve Anvil! Striker dashboard package
BuildRequires:  httpd
Requires:       postgresql-server
Requires:       perl-CGI
Requires:       httpd
Requires:       nmap

%description striker
Web interface of the Striker dashboard for Alteeve Anvil! systems


#%package node
#Summary:        Alteeve Anvil! Node package
#Requires:

#%description node
#<placeholder for node description>


%prep
%autosetup -n anvil-master


%build


%install
rm -rf $RPM_BUILD_ROOT
mkdir -p %{buildroot}/%{_sbindir}/anvil/
mkdir -p %{buildroot}/%{_sysconfdir}/anvil/
mkdir -p %{buildroot}/%{_localstatedir}/www/
install -d -p Anvil %{buildroot}/%{_datadir}/perl5/
install -d -p html %{buildroot}/%{_localstatedir}/www/
install -d -p cgi-bin %{buildroot}/%{_localstatedir}/www/
install -d -p units/ %{buildroot}/usr/lib/systemd/system/
install -d -p tools/ %{buildroot}/%{_sbindir}/
cp -R -p Anvil %{buildroot}/%{_datadir}/perl5/
cp -R -p html %{buildroot}/%{_localstatedir}/www/
cp -R -p cgi-bin %{buildroot}/%{_localstatedir}/www/
cp -R -p units/* %{buildroot}/usr/lib/systemd/system/
cp -R -p tools/* %{buildroot}/%{_sbindir}
cp -R -p anvil.conf %{buildroot}/%{_sysconfdir}/anvil/
cp -R -p anvil.version %{buildroot}/%{_sysconfdir}/anvil/
mv %{buildroot}/%{_sbindir}/anvil.sql %{buildroot}/%{_datadir}/anvil.sql
mv %{buildroot}/%{_sbindir}/snmp-models.json %{buildroot}/%{_sysconfdir}/anvil/snmp-models.json
sed -i "1s/^.*$/%{version}/" %{buildroot}/%{_sysconfdir}/anvil/anvil.version


%post
restorecon -rv %{buildroot}/%{_localstatedir}/www


%files core
%doc README.md notes
%config(noreplace) %{_sysconfdir}/anvil/anvil.conf
%config(noreplace) %{_datadir}/anvil.sql
%{_usr}/lib/*
%{_sbindir}/*
%{_sysconfdir}/anvil/anvil.version
%{_datadir}/perl5/*


%files striker
%attr(0775, apache, root) %{_localstatedir}/www/*/*
%{_sysconfdir}/anvil/snmp-models.json
%ghost %{_sysconfdir}/anvil/snmp-vendors.txt

#%files node
#<placeholder for node specific files>


%changelog
* Fri Jan 26 2018 Matthew Marangoni <matthew.marangoni@senecacollege.ca> 3.0a-1
- Initial RPM release
